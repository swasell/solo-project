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

    const editStyle={
        backgroundImage: 
        "url('https://images.unsplash.com/photo-1552984418-b55abf780dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    useEffect(() => {
        axios.put(`http://localhost:8000/api/exercise/edit/${id}`)
            .then(res => {
                setName(res.data.name);
                setFocus(res.data.focus);
                setDescription(res.data.description);
            })
            .catch((err) => {console.log(err);
            })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/exercise/edit/${id}`, {
            name, 
            focus,
            description,
        })
            .then(res => {
                console.log(res);
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className="form-box" style={editStyle}>
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
        </div>
    );
};

export default EditList;