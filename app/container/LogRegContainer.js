import React, { PropTypes } from 'react';
import LogReg from '../components/LogReg';
import AuthApi from '../api/AuthApi';

class LogRegContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogClick = this.handleLogClick.bind(this);
        this.handleSignClick = this.handleSignClick.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onSignup = this.onSignup.bind(this)
    }

    onChangeEmail(e){
        var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(regex.test(e.target.value)===false){
            e.currentTarget.classList.add('mui--is-invalid');
        }else{
            e.target.classList.remove('mui--is-invalid');
        }
    }

    onChangeForm(e){
        console.log(e.currentTarget.elements);
        let invalidFlag=false;
        let button = e.currentTarget.elements[5];
        for(var x=0; x<e.currentTarget.elements.length-2;x++){
            for(var y=0; y<e.currentTarget.elements[x].classList.length;y++){
                if(e.currentTarget.elements[x].classList[y]==='mui--is-invalid' || e.currentTarget.elements[x].classList[y]==='mui--is-empty'){
                    invalidFlag=true;
                }
            }
        }
        if(invalidFlag===true){
            button.setAttribute('disabled', true);
        }else{
            button.removeAttribute('disabled');
        }
    }
    
    handleSignClick(){
        this.context.router.push('/signup');
    }
    handleLogClick(){
        this.context.router.push('/login');
    }

    onLogin(e){
        e.preventDefault();
        let data = {
            username: e.target.elements[0].value,
            password: e.target.elements[1].value
        }
        AuthApi.onLogin(data).then((res)=>{
            console.log(res.data); //access data here //check the console
        });
       
    }

    onSignup(e){
        e.preventDefault();
        let elements = e.target.elements;
        if(elements[3].value>6){
            alert("Your password must be at least 6 characters long. Please try another.");
            return;
        }
        let data={
            firstName: elements[0].value,
            lastName: elements[1].value,
            email: elements[2].value,
            password: elements[3].value
        }
        AuthApi.onSignup(data).then((res)=>{
            console.log(res.data); //access data here //check the console
        });
    }

    render() { 
        return(
            <LogReg
                handleLogClick={this.handleLogClick}
                handleSignClick={this.handleSignClick}
                onLogin={this.onLogin}
                onSignup={this.onSignup}
                onChangeEmail={this.onChangeEmail}
                onChangeForm={this.onChangeForm}
             />
        )
    }
}

LogRegContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default LogRegContainer;