import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => (dispatch) => {
	const id = uuidv4();
	// Dispatch action inside alert reducer which is then filtered through the root reducer to create universal state

	// Fires reducer automatically
	// Fire the SET_ALERT case inside alert reducer
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id },
	});
};

// Actions are where you would commonly make http requests when using a redux implementation. E.g

/*
export const getUsers = () => (dispatch) => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};

	fetch('https://aqueous-retreat-11852.herokuapp.com/test-get', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			console.log(result)
			dispatch({
				type: "GET_USERS",
				payload: { result },
			});
		})
		.catch((error) => console.log('error', error));
}

*/
