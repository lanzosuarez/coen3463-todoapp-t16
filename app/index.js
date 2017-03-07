import React from 'react';
import ReactDom from 'react-dom';
import routes from './config/routes';
import '../node_modules/toastr/build/toastr.min.css';

ReactDom.render(
    routes,
    document.getElementById('app')
);

