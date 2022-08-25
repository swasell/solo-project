import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import './EditList.css'

const EditList = () => {

    const {id} = useParams();
    const [name, setName] = useState('');
    const [focus, setFocus] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.put(`http://localhost:8000/api/exercise/edit/${id}`)
            .then(res => {
                setName(res.data.name);
                setFocus(res.data.focus);
                setDescription(res.data.description);
            })
            .catch((err) => {console.log(err);
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/exercise/edit/${id}`, {
            name, 
            focus,
            description,
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className='edit-container'>
            <form className='edit-form' onSubmit={handleSubmit}>
                <div className='edit-fields'>
                    <label>Exercise Name:</label>
                    <input type="text" value={name}
                    onChange= { (e) => setName(e.target.value) }/>
                </div>
                <br/>
                <div className='edit-fields'>
                    <label>Muscles Focused:</label>
                    <input type="text" value={focus}
                    onChange= { (e) => setFocus(e.target.value) }/>
                </div>
                <br/>
                <div className='edit-fields'>
                    <label>Description:</label>
                    <textarea type="text" value={description} rows="3" cols="25"
                    onChange= { (e) => setDescription(e.target.value) }/>
                </div>
                <br/>
                <button> Update </button>
            </form>
            <img className="edit-pic"src={'https://images.pexels.com/photos/2277978/pexels-photo-2277978.jpeg'} alt="sunset bball"></img>
        </div>
    );
};

export default EditList;