import axios from 'axios';
import {browserHistory} from 'react-router'

const AuthApi = { 

    onLogin:(data)=>{
        return axios.post('/auth/login',data)
        .then((res)=>{
            console.log(res);
            return res;
        }).catch((err)=>{
            throw(err);
        });
    },
    onSignup:(data)=>{
        return axios.post('/auth/signup',data)
        .then((res)=>{
            return res;
        }).catch((err)=>{
            throw(err);
        });
    },
    onGetUser: (data)=>{
        return axios.get('/auth/getUser')
            .then((res)=>{
                console.log(res);
                return res;
            }).catch((err)=>{
                throw(err);
            });
    },
    onLogout:()=>{
        axios.post('/auth/logout').
        then(res=>{
            console.log(res);
            browserHistory.push(res.data.redirect);
        }).catch(err=>{
            throw(err);
        });
    }
}

export default AuthApi;