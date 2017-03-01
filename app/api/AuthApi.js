import axios from 'axios';

const AuthApi = { 

    onLogin:(data)=>{
        return axios.post('/auth/login',data)
        .then((res)=>{
            return res;
        }).catch((err)=>{
            return err; 
        });
    },
    onSignup:(data)=>{
        return axios.post('/auth/signup',data)
        .then((res)=>{
            return res;
        }).catch((err)=>{
            return err;
        });
    }
}

export default AuthApi;