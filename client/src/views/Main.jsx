import React from 'react';
import logout from '../actions/logout';
import { useUser } from "../contexts/userContext";
import { useNavigate, Link } from "react-router-dom";
import Homepirates from './HomePirates';


const Main = () => {

    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const renderInfo = () => {
        if(user){
            return(<>
                <Homepirates/>
            </>)
        }else{
            return(<>No hay un usuario conectado, conectate para ver el contenido</>)
        }
    }

    const logOut = async () => {
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert("Error, could not log out");
        navigate("/");
    };

    return (
        <div className='p-2 bg-dark rounded mt-3 mb-4'>
            <nav className='navbar navbar-dark bg-dark'>
                <h1 className='navbar-brand'><i className='fa-solid fa-skull-crossbones'>Pirates Crew</i></h1>
                <h4><i className='fas fa-user me-1'></i>{user.firstName} estas conectado/a </h4>
                <button className='btn btn-danger ms-4' onClick={logOut}>Cerrar sesión</button>
            </nav>
            <h2 className='display-8 my-4'> {renderInfo()} </h2>
        </div>
    );
}

export default Main;