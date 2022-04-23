import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const Viajesform = (props) => {

    const { onSubmitProp } = props;

    const navigate = useNavigate();

    return (
            <div >
                <Formik
                initialValues={{
                    name: "",
                    image: "",
                    position: "Capitan",
                    treasures: "",
                    phrase: "",
                    skill1: true,
                    skill2: true,
                    skill3: true
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                .min(3, "El nombre es muy corto"),
                // .required ("Por favor ingresa un nombre"),
                
                image: Yup.string()
                .min(3, "La imagen es muy corta"),
                // .required ("Por favor ingresa la imagen"),

                position: Yup.string()
                .min(3, "La url de la imagen es muy corta"),
                // .required ("Por favor ingresa la posición del pirata"),
                
                treasures: Yup.number(),
                // .required ("Por favor ingresa el tesoro que posee el pirata"),

                phrase: Yup.string()
                .min(5, "La frase ingresada es muy corta"),
                // .required ("Por favor ingresala frase del pirata correspondiente"),

                skill1: Yup.bool(),
                skill2: Yup.bool(),
                skill3: Yup.bool(),
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
                    // values,
                    errors,
                    touched,
                    handleSubmit,

                    valid,
                }) =>{
            return (
                <div className='create-form-container'>
                    <Form className= "contact2" method= "post" onSubmit={handleSubmit}>
                        <div className='left-side-form'>
                            <label htmlFor="name" className="col-form-label">Nombre del Pirata: </label>
                            <Field id='name' type="text" placeholder="Nombre" className={`form-control`} name='name'/>
                            <ErrorMessage name="name">{(msg) => <p className='text-danger mb-4'>{msg}</p>}</ErrorMessage>

                            <label htmlFor="image" className="col-sm-6 col-form-label">Añade una imagen vía url:  </label>
                            <Field  id='image' type="text" placeholder="URL" className={`form-control`} name='image'/>
                            {errors.image && touched.image && <p className='text-danger mb-4'>{errors.image}</p>}

                            <label htmlFor="treasures" className="col-sm-6 col-form-label">Teseros en posesión: </label>
                            <Field  id='treasures' type="number" placeholder="Tesoros" className={`form-control`} name='treasures'/>
                            {errors.treasures && touched.treasures && <p className='text-danger mb-4'>{errors.treasures}</p>}
        
                            <label htmlFor="phrase" className="col-sm-6 col-form-label">Frase tipica del pirata:  </label>
                            <Field  id='phrase' type="text" placeholder="Frase " className={`form-control`} name='phrase'/>
                            {errors.phrase && touched.phrase && <p className='text-danger mb-4'>{errors.phrase}</p>}
                        </div>
                        <div className='right-side-form'>
                            <label htmlFor="position" className="col-sm-6 col-form-label">Posición del pirata:  </label>
                            <Field as="select" id='position' type="text" placeholder="position de paquete" className={`form-control`} name='position'>
                                <option value="default"></option>
                                <option value="Capitan">Capitan</option>
                                <option value="Primer oficial">Primer oficial</option>
                                <option value="Oficial de intendecia">Oficial de intendecia</option>
                                <option value="Contra maestre">Contra maestre</option>
                                <option value="PowderMonkey">PowderMonkey</option>
                            </Field>
                            {errors.position && touched.position && <p className='text-danger mb-4'>{errors.position}</p>}

                            <br></br>
                            <div className='form-check '>
                            <Field className='form-check-input' id="skill1" type="checkbox" name="skill1" />
                            <label className='form-check-label' htmlFor='skill1'>Pata de palo</label>
                            {errors.skill1 && touched.skill1 && <p className='error'>{errors.skill1} </p>}
                            </div>

                            <div className='form-check '>
                            <Field className='form-check-input' id="skill2" type="checkbox" name="skill2"  />
                            <label className='form-check-label' htmlFor='skill2'>Parche en el ojo</label>
                            {errors.skill2 && touched.skill2 && <p className='error'>{errors.skill2} </p>}
                            </div>

                            <div className='form-check '>
                            <Field className='form-check-input' id="skill3" type="checkbox" name="skill3" />
                            <label className='form-check-label' htmlFor='skill1'>Mano de gancho</label>
                            {errors.skill3 && touched.skill3 && <p className='error'>{errors.skill3} </p>}        
                            </div>

                            <br></br>
                            <button className='btn btn-outline-success' type="submit">Añadir pirata</button>
                            <button className='btn btn-outline-danger ms-3' onClick={() => navigate("/myprofile")}>Cancelar</button>
                            {/* disabled={Object.values(errors).length > 0} */}
                        </div>
                    </Form>
                    </div>
            );
            }}
            </Formik>
            </div>
    );
}

export default Viajesform;
