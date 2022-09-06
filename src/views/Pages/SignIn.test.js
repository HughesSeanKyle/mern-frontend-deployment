import {
	render,
	screen,
	cleanup,
	fireEvent,
	act,
	waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import SignIn from './SignIn';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import React, { useState as useStateMock } from 'react';

import { Provider } from 'react-redux';
import store from '../../store';

// Clean up all state used before running next test
beforeEach(cleanup);

describe('<SignIn />', () => {
	it('renders the Signup page', () => {
		const { getByText } = render(
			<Provider store={store}>
				<BrowserRouter>
					<SignIn />
				</BrowserRouter>
			</Provider>
		);

		expect(
			getByText(/Enter your email and password to sign in/i)
		).toBeInTheDocument();
	});
});
