import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
/* 
	- This function should be run inside a useEffect in the Admin layout comp. Everytime a view connected to the admin route is hit loadUser will run. Do auth check from there onward.   
*/
export const loadUser = () => async (dispatch) => {
	console.log('loadUser running..');

	// Set auth header with token if there is one
	// if (sessionStorage.token) {
	// 	// Set auth-x-token as default header in axios call
	// 	setAuthToken(sessionStorage.token);
	// }

	try {
		const res = await axios.get('https://niftyswap-kxzt.onrender.com/auth');

		console.log('res loadUser', res);

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

// Register a user axios
export const signUp = ({ username, email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({
		name: username,
		email: email,
		password: password,
	});

	try {
		const res = await axios.post(
			'https://niftyswap-kxzt.onrender.com/user',
			body,
			config
		);

		// console.log('resSignUp', res);

		// if (res.data.errors) {
		// 	console.log('errors', res.data.errors);
		// }

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});

		//   dispatch(loadUser());
	} catch (err) {
		console.log('err', err.response.data);

		dispatch({
			type: REGISTER_FAIL,
			// Payload must always be an object
			payload: err.response.data.errors,
		});
	}
};

// Sign user in
// Register a user axios
export const signIn = ({ email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({
		email: email,
		password: password,
	});

	try {
		const res = await axios.post(
			'https://niftyswap-kxzt.onrender.com/auth',
			body,
			config
		);

		// console.log('resSignUp', res);

		// if (res.data.errors) {
		// 	console.log('errors', res.data.errors);
		// }

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		//   dispatch(loadUser());
	} catch (err) {
		console.log('err', err.response.data);

		dispatch({
			type: LOGIN_FAIL,
			// Payload must always be an object
			payload: err.response.data.errors,
		});
	}
};

// Logout
export const signOut = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};
