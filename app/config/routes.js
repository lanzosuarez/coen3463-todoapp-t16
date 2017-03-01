import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import LogRegContainer from '../container/LogRegContainer';

var routes = (
    <Router history={browserHistory} >
        <Route path='/' component={App}>
            <Route path ='/login' component={LogRegContainer}></Route>
            <Route path ='/signup' component={LogRegContainer}></Route>
        </Route>
    </Router>
)

export default routes;