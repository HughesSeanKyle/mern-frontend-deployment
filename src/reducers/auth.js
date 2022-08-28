import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
	errors: null,
	signUpSuccess: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	console.log('payload', payload);

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
				errors: null,
			};
		case REGISTER_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
				signUpSuccess: 'Welcome, your sign up was successful',
				errors: null,
			};
		// Both cases below will run the same logic
		case REGISTER_FAIL:
		case AUTH_ERROR:
			// Prevent an invalid token in local storage
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				errors: payload,
				signUpSuccess: null,
			};
		default:
			return state;
	}
}
