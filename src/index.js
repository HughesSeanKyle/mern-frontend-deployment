import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthLayout from 'layouts/Auth.js';
import AdminLayout from 'layouts/Admin.js';

// Redux ("connect" react to redux store)
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route path={`/auth`} component={AuthLayout} />
				<Route path={`/admin`} component={AdminLayout} />
				<Redirect from={`/`} to="/auth/signin" />
			</Switch>
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);
