// import React,{useState, useEffect} from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from "react-router-dom";
// import { useUser } from "../contexts/userContext";
// import Loginform from '../components/LoginForm';

// const Login = () => {

//     const [loginErrors, setLoginErrors] = useState([]);
//     const {setUser}=useUser();
//     const navigate=useNavigate();

//     const loginUser = user => {
//         axios.post('/api/login', user)
//             .then(res=>{
//                 console.log('Usuario logueado');
//                 console.log(res.data);
//                 axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
//                 .then(res=>{
//                     setUser(res.data);
//                     navigate("/myprofile");
//                 })
//                 .catch(err=>{
//                     console.error(err);
//                     return { success: false, data: err.message };
//                 })
                
//             })
//             .catch(err=>{
//                 console.log(err.response.data);
//                 const errorResponse = err.response.data.errors; 
//                 const errorArr = []; 
//                 for (const key of Object.keys(errorResponse)) { 
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 setLoginErrors(errorArr);
//             }) 
//     }

//     return (
//         <div>
//             <nav className='navbar navbar-dark bg-dark'>
//                 <h1 className='navbar-brand'><i className='fa-solid fa-skull-crossbones'>Pirates Crew</i></h1>
//                 <Link to='/register'><button className='btn btn-link'>Registrarse</button></Link>
//             </nav>
//             {loginErrors.map((err, index) => <div className={`alert alert-danger`} role="alert">{err}</div>)}
//             <Loginform onSubmitProp={loginUser}/>
//         </div>
//     );
// }

// export default Login;
