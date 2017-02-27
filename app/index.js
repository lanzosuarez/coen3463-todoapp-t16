import React from 'react';
import ReactDom from 'react-dom';
import routes from './config/routes';
import App from './components/App';

ReactDom.render(
    routes,
    document.getElementById('app')
)

