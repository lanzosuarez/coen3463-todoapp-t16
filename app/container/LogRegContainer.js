import React, { PropTypes } from 'react';
import LogReg from '../components/LogReg';
import AuthApi from '../api/AuthApi';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import Loading from '../components/Loading';

class LogRegContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleLogClick = this.handleLogClick.bind(this);
        this.handleSignClick = this.handleSignClick.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onSignup = this.onSignup.bind(this);

        this.state = {
            user: {},
            isLoading: false
        }
    }

    componentWillMount(){
        this.setState({isLoading:true});
        if(this.props.routeParams.mode){
            this.setState({isLoading:false});
            toastr.info('Please login first');
            return;
        }
        AuthApi.onGetUser().then(res=>{
            this.setState({isLoading:false});
            if(res.data.response){
                this.context.router.push('/todos');
            } else {
                this.context.router.push('/');
            }
        });
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

    redirect(path){
        browserHistory.push(path);
    }

    onLogin(e){
        e.preventDefault();
        let data = {
            username: e.target.elements[0].value,
            password: e.target.elements[1].value
        }
        AuthApi.onLogin(data).then((res)=>{
            const data = res.data;
            if(data.success===true){
                this.setState({
                    user: data.response._id
                });
                this.redirect(res.data.redirect);
                return;
            }
            toastr.warning(res.data.response);
        }).catch((err)=>{
            throw(err);
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
            console.log(res.data.redirect); //access data here //check the console
            if(res.data.success===false){
                console.log("onerror");
                console.log(res.data);
                return; 
            }
            this.redirect(res.data.redirect);
        });
    }

    render() { 
        if(this.state.isLoading){
            return(
                <div>
                    <Loading />
                </div>
            )
        }
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
    router: PropTypes.object.isRequired
};

export default LogRegContainer;