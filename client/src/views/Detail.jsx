import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';

const Detail = () => {

    const {id} = useParams();
    const [pirate, setPirate] = useState({})
    const navigate = useNavigate();
    const [skill1, setSkill1] = useState();
    const [skill2, setSkill2] = useState()
    const [skill3, setSkill3] = useState()


    useEffect(() => {
        axios.get("/api/pirates/" + id)
            .then((res)=>{
                setPirate(res.data.pirate);
                console.log(res.data.pirate);
                setSkill1(res.data.pirate.skill1);
                setSkill2(res.data.pirate.skill2);
                setSkill3(res.data.pirate.skill3);
            })
    }, [])

    const changeSkill = (skillNumber) => {
        axios.post('/api/pirates/changeskill/'+skillNumber+"/"+id)
        .then(res=>{
            console.log("resulto")
            if(skillNumber === 1){
                const original = skill1;
                console.log(original);
                setSkill1(!original);
            }
            if(skillNumber === 2){
                const original = skill2;
                setSkill2(!original);
            }
            if(skillNumber === 3){
                const original = skill3;
                setSkill3(!original);
            }

        }).catch((err)=>{
            
        })
    }


    return (
        <div className='container-detail'>
                <div className='header-detail'>
                    <h1>{pirate.name}</h1>
                    <button className='btn btn-primary ms-3' onClick={() => navigate("/myprofile")}>Tripulacion</button>
                </div>
            <div className='body-detail'>
                <div className='left'>
                    <img src={pirate?.image} alt="" />
                    <h2>"{pirate.phrase}"</h2>
                </div>
                <div className='rigth'>
                    <h3>Sobre el pirata: </h3>
                    <p>Posicion: {pirate.position}</p>
                    <p>Tesoro: {pirate.treasures}</p>
                    <p>Tiene pata de palo: {skill1? "Si": "No"} </p> <button className='btn btn-outline-success' onClick={()=>changeSkill(1)}>{skill1?"No":"Si"}</button>
                    <p>Tiene parche en el ojo: {skill2? "Si": "No"}</p> <button className='btn btn-outline-success' onClick={()=>changeSkill(2)}>{skill2?"No":"Si"}</button>
                    <p>Tiene gancho: {skill3? "Si": "No"}</p> <button className='btn btn-outline-success' onClick={()=>changeSkill(3)}>{skill3?"No":"Si"}</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
