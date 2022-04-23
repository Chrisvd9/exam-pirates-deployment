// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from "react-router-dom";
// import { useUser } from "../contexts/userContext";
// import Registerform from '../components/RegisterForm';

// const Register = () => {
//     const [registerErrors, setRegisterErrors] = useState([]); 
//     const {setUser}=useUser();
//     const navigate=useNavigate();

//     const registerUser = user => {
//         axios.post('/api/register', user)
//             .then(res=>{
//                 console.log(res.data);
//                 axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
//                 .then(res=>{
//                     setUser(res.data);
//                     navigate("/");
//                 })
//                 .catch(err=>{
//                     console.error(err);
//                     return { success: false, data: err.message };
//                 })
                
//             })
//             .catch(err=>{
//                 const errorResponse = err.response.data.errors; 
//                 const errorArr = []; 
//                 for (const key of Object.keys(errorResponse)) { 
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 setRegisterErrors(errorArr);
//             }) 
//     }
//     return (
//         <div>
//             <nav className='navbar navbar-dark bg-dark'>
//                 <h1 className='navbar-brand'><i className='fa-solid fa-skull-crossbones'>Pirates Crew</i></h1>
//                 <Link to='/'><button className='btn btn-link'>Iniciar sesión</button></Link>
//             </nav>
//             {registerErrors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
//             <Registerform onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm=''/>
//         </div>
//     );
// }

// export default Register;
