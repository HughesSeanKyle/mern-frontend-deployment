import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthLayout from 'layouts/Auth.js';
import AdminLayout from 'layouts/Admin.js';

// Redux ("connect" react to redux store)
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path={`/auth`} component={AuthLayout} />
				<Route path={`/admin`} component={AdminLayout} />
				<Redirect from={`/`} to="/auth/signin" />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
