import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Loginform = (props) => {

    const {onSubmitProp} = props;

    return (
        <div>
            <Formik
            initialValues={{
                email:'',
                password:'',
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
            .email("El correo ingresado no es valido")
            .min(3, "El correo electrónico es incorrecto")
            .required("Por favor, ingresa un correo electrónico válido"),
            
            password: Yup.string()
            .min(8, "La clave debe contener minimo 8 caractes")
            .required("Por favor ingrese una contraseña")
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                valid,
            }) =>{
        return (
            <div className='p-2 mt-2'>
                <h1 className='display-4 my-4'>Iniciar sesión</h1>
                <Form className= "contact" method= "post" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="col-form-label">Correo Electrónico</label>
                    <Field id='email' type="text" placeholder="Email" className={`form-control`} name='email'/>
                    <ErrorMessage name="email">{(msg) => <p className='text-danger mb-4'>{msg}</p>}</ErrorMessage>

                    <label htmlFor="password" className="col-sm-2 col-form-label">Contraseña</label>
                    <Field  id='password' type="password" placeholder="Contraseña" className={`form-control`} name='password'/>
                    {errors.password && touched.password && <p className='text-danger mb-4'>{errors.password}</p>}
                    <br></br>
                    <button className='btn btn-primary' type="submit" >Iniciar sesión</button>
                    {/* disabled={Object.values(errors).length > 0} */}
                </Form>
            </div>
        );
        }}
        </Formik>
        </div>
    );
}

export default Loginform;
