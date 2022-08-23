import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
	errors: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	console.log('payload', payload);

	switch (type) {
		case REGISTER_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				errors: payload,
			};
		default:
			return state;
	}
}
