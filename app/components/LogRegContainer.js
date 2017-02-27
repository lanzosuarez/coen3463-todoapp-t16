import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import LoginForm from './Login';
import SignupForm  from './Signup';

class LogRegContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.context.router.push('/signup');
    }
    render() {
        console.log(this.context)
        return(
             <Tabs justified={true}>
                <Tab value="login" label="Login" >
                    <LoginForm />
                </Tab>
                <Tab value="signup" label="Sign up" onActive={this.handleClick}>
                    <SignupForm />
                </Tab>
            </Tabs>
        )
    }
}

LogRegContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default LogRegContainer;