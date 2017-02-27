import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import LoginForm from './Login';
import SignupForm  from './Signup';

class LogRegContainer extends React.Component {
    constructor(props, context) {
        super(props);
        context.router
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log('hello', e);
        this.props.context.push('/signup');
    }
    render() {
        return (
            <Tabs justified={true}>
                <Tab value="login" label="Login" >
                    <LoginForm />
                </Tab>
                <Tab value="signup" label="Sign up" onActive={this.handleClick}>
                    <SignupForm />
                </Tab>
            </Tabs>
        );
    }
}

LogRegContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default LogRegContainer;