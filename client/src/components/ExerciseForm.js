import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './ExerciseForm.css'

const ExerciseForm = () => {

    const [name, setName] = useState("");
    const [focus, setFocus] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/exercise/new", {
            name,
            focus,
            description,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setName("");
                setFocus("");
                setDescription("");
                navigate("/");
            })
            .catch((err) => setErrors(err.response.data.errors))
        };
    
    return(
        <div className="new-container">
            <form onSubmit={submitHandler} className="form">
                <div className="form-fields">
                    <label> Exercise Name: </label>
                    <input type="text" value={name}
                    onChange= {(e) => setName(e.target.value)}/>
                    {errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
                </div>
                <br/>
                <div className="form-fields">
                    <label> Muscles Focused: </label>
                    <input type="text" value={focus}
                    onChange= {(e) => setFocus(e.target.value)}/>
                    {errors.focus ? <p className="text-danger">{errors.focus.message}</p> : null}
                </div>
                <br/>
                <div className="form-fields">
                    <label> Description: </label>
                    <textarea value={description} rows="3" cols="25"
                    onChange= {(e) => setDescription(e.target.value)}/>
                    {errors.description? <p className="text-danger">{errors.description.message}</p> : null}
                </div>
                <br/>
                <button> Submit </button>
            </form>
            <img className="newform-pic" src={'https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg'} alt="basketball court"></img>
        </div>
    )
}

export default ExerciseForm;