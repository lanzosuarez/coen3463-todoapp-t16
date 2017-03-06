import React, {PropTypes} from 'react';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import LoginForm from '../components/Login';
import SignupForm  from '../components/Signup';

const LogReg = (props)=>{
    return(
         <Tabs justified={true}>
            <Tab value="login" label="Login" onActive={props.handleLogClick}>
                    <LoginForm 
                        onLogin={props.onLogin} 
                        />
                </Tab>
            <Tab value="signup" label="Sign up" onActive={props.handleSignClick}>
                <SignupForm 
                    onSignup={props.onSignup} 
                    onChangeEmail={props.onChangeEmail}
                    onChangeForm={props.onChangeForm} />
            </Tab>
        </Tabs>
    );
}

LogReg.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangeForm: PropTypes.func.isRequired,
    handleLogClick: PropTypes.func.isRequired,
    handleSignClick:PropTypes.func.isRequired,
}

export default LogReg;