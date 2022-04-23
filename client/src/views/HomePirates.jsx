import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Deletebutton from "../components/DeleteButton";

const Homepirates = () => {
    // const { id } = useParams();
    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();

useEffect(() => {
    axios
        .get("/api/pirates")
        .then((res) => {
        setPirates(res.data.pirates);
        console.log(res.data);
        })
        .catch((err) => console.log("Error:", err));
    }, []);

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id != pirateId))
    }

    // const deletePirate = () => {
    //     axios.delete("/api/pirates/" + id)
    //         .then(res => {
    //             console.log(res)
    //             // navigate("/myprofile")
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="card-container">    
            <div className="card-header">
                <div className="card-header-separation">
                    <h2><i className="fa-solid fa-skull-crossbones me-2"></i>Pirate crew</h2>
                    <button onClick={() => navigate("/pirates/new")} className="btn btn-primary ms-3">Añadir pirata</button>
                </div>
                <div className="card-body">
                    {
                        pirates?.map((pirate, i) => (
                            <div  key={i} className="card-img">
                            <img src={pirate?.image} alt="" />
                            <div  className="card-object">
                                <h3>{pirate?.name}</h3>
                                <div className="btn-menu">
                                    <button onClick={() => navigate("/pirates/" + pirate._id)} className="btn btn-primary">Ver pirata</button>
                                    <Deletebutton pirateId={pirate._id} successCallback={()=>removeFromDom(pirate._id)}/>
                                </div>
                                {/* <button onClick={deletePirate} className="btn btn-danger ms-3">Tiralo a los tiburones</button> */}
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Homepirates;
