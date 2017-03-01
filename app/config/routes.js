import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import LogRegContainer from '../container/LogRegContainer';
import TestContainer from '../container/TestContainer';

var routes = (
    <Router history={browserHistory} >
        <Route path='/' component={App}>
            <Route path ='login' component={LogRegContainer} />
            <Route path ='signup' component={LogRegContainer} />
            <Route path ='test' component={TestContainer} />
        </Route>
    </Router>
)

export default routes;