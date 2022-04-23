import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import Loginform from '../components/LoginForm';
import Registerform from '../components/RegisterForm';

const User = () => {

    const [loginErrors, setLoginErrors] = useState([]);
    const [registerErrors, setRegisterErrors] = useState([]); 
    const {setUser}=useUser();
    const navigate=useNavigate();

    const loginUser = user => {
        axios.post('/api/login', user)
            .then(res=>{
                console.log('Usuario logueado');
                console.log(res.data);
                axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
                .then(res=>{
                    setUser(res.data);
                    navigate("/myprofile");
                })
                .catch(err=>{
                    console.error(err);
                    return { success: false, data: err.message };
                })
                
            })
            .catch(err=>{
                console.log(err.response.data);
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setLoginErrors(errorArr);
            }) 
    }

    const registerUser = user => {
        axios.post('/api/register', user)
            .then(res=>{
                console.log(res.data);
                axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
                .then(res=>{
                    setUser(res.data);
                    // navigate("/");
                })
                .catch(err=>{
                    console.error(err);
                    return { success: false, data: err.message };
                })
                
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                console.log(errorResponse);
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setRegisterErrors(errorArr);
            }) 
    }



    return (
        <div className='container-user'>
            <div className='header-user'>
                <h1><i className="fa-solid fa-skull-crossbones me-2"></i>Bienvenido a Pirate crew</h1>
            </div>
            <div className='user-body'>
                <div className='register'>
                    {registerErrors.map((err, index) => <div key={index} className="alert alert-danger" role="alert">{err}</div>)}
                    <Registerform onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm=''/>
                </div>
                <div className='login'>
                    {loginErrors.map((err, index) => <div className={`alert alert-danger`} role="alert">{err}</div>)}
                    <Loginform onSubmitProp={loginUser}/>
                </div>
            </div>
        </div>
    );
}

export default User;
