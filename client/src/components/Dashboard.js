import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import './Dashboard.css'

const Dashboard = (props) => {

    const {id} = useParams();
    const [exerciseList, setExerciseList] = useState ([]);
    const navigate = useNavigate();

    const removeExercise = (exerciseId) => {
        axios.delete(`http://localhost:8000/api/exercise/${exerciseId}`)
        .then((res) => {
            const newExercises = exerciseList.filter((exercise) => exercise._id !== exerciseId);
            setExerciseList(newExercises);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/exercise")
        .then((res) => {
            console.log(res.data);
            setExerciseList(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id]);

    return(
        <div className='container'>
            <table className='dash-tbl'>
                <tbody>
                    <tr>
                        <th>Exercise Name</th>
                        <th>Muscles Focused</th>
                        <th>Action</th>
                    </tr>
                    {exerciseList.map((exercise) => (
                        <tr key={exercise._id}>
                            <td> <Link to={`/exercise/${exercise._id}`}>{exercise.name} </Link></td>
                            <td>{exercise.focus}</td>
                            <td>
                                <button onClick={() => navigate(`exercise/edit/${exercise._id}`)}>Edit</button>
                                <span> | </span>
                                <button onClick={() => removeExercise(exercise._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
                
            </table>
        </div>
    )
}

export default Dashboard;