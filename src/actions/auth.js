import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User
export const signUp = ({ name, email, password }) => async (dispatch) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		name: name,
		email: email,
		password: password,
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	};

	fetch('https://aqueous-retreat-11852.herokuapp.com/api/user', requestOptions)
		.then((response) => response.json())
		.then((result) => {
			// Note token to be received here and must be stored to state
			// result must be returned
			// When status 200 okay
			console.log(result);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: result,
			});
		})
		.catch((error) => {
			dispatch({
				type: REGISTER_FAIL,
			});
		});
};
