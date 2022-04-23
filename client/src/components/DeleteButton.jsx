import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Deletebutton = (props) => {

    const {pirateId, successCallback} = props;
    
    const deletePirate = e => {
        axios.delete('/api/pirates/' + pirateId)
            .then(res=>{
                successCallback();
            })
    }

    return (
        <div>
            <button onClick={deletePirate} className="btn btn-danger ms-3">Tiralo a los tiburones</button>
        </div>
    );
}

export default Deletebutton;
