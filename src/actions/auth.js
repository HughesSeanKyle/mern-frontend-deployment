import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
/* 
	- This function should be run inside a useEffect in the Admin layout comp. Everytime a view connected to the admin route is hit loadUser will run. Do auth check from there onward.   
*/
export const loadUser = () => async (dispatch) => {
	console.log('loadUser running..');

	// Set auth header with token if there is one
	if (localStorage.token) {
		// Set auth-x-token as default header in axios call
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get(
			'https://aqueous-retreat-11852.herokuapp.com/api/auth'
		);

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

// Register User fetch
// export const signUp = ({ username, email, password }) => async (dispatch) => {
// 	const myHeaders = new Headers();
// 	myHeaders.append('Content-Type', 'application/json');

// 	const raw = JSON.stringify({
// 		name: username,
// 		email: email,
// 		password: password,
// 	});

// 	const requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: raw,
// 		redirect: 'follow',
// 	};

// 	fetch('https://aqueous-retreat-11852.herokuapp.com/api/user', requestOptions)
// 		.then((response) => response.json())
// 		.then((result) => {
// 			// Note token to be received here and must be stored to state
// 			// result must be returned
// 			// When status 200 okay
// 			console.log(result);
// 			dispatch({
// 				type: REGISTER_SUCCESS,
// 				payload: result,
// 			});
// 		})
// 		.catch((error) => {
// 			dispatch({
// 				type: REGISTER_FAIL,
// 			});
// 		});
// };

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
			'https://aqueous-retreat-11852.herokuapp.com/api/user',
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
