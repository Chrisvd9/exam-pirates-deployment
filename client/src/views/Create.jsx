import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pirateform from '../components/PirateForm';

const Create = () => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const crearPirate = (values) => {

        axios.post("/api/pirates/new", values)
            .then(res=>{
                console.log("exitoso");
                navigate("/myprofile");
            }).catch(err => {
                console.log(err.response.data)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className='create-container'>
            <div className='create-header'>
                <h1><i className="fa-solid fa-skull-crossbones me-2"></i>Añadir pirata</h1>
                <button className='btn btn-primary ms-3' onClick={() => navigate("/myprofile")}>Tripulacion</button>
            </div>
            {errors?.map((err, i)=> <div key={i} className="alert alert-danger" role="alert">{err}</div>)}
            <Pirateform  onSubmitProp={crearPirate}/>
        </div>
    );
}

export default Create;
