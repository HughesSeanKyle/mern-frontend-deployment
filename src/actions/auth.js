import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
} from './types';

// Load User
// export const loadUser = () => async (dispatch) => {};

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

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});

		//   dispatch(loadUser());
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
		});
	}
};
