import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from '../actions/types';

const initialState = {
	token: sessionStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
	errors: null,
	signUpSuccess: null,
	signInSuccess: null,
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
			sessionStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
				signUpSuccess: 'Welcome, your sign up was successful',
				errors: null,
			};
		case LOGIN_SUCCESS:
			sessionStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
				signInSuccess: 'Sign in successful',
				signUpSuccess: null,
				errors: null,
			};
		// Both cases below will run the same logic
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			// Prevent an invalid token in local storage
			sessionStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				errors: payload,
				signInSuccess: null,
				signUpSuccess: null,
				user: null,
			};
		default:
			return state;
	}
}
