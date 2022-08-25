import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './Details.css'

const Details = () => {

    const {id} = useParams();
    const [exercise, setExercise] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/exercise/${id}`)
        .then((res) => {
            console.log(res.data);
            setExercise(res.data);
        })
            .catch((err) => console.log(err))
    }, [id]);

    return(
        <div className="details-container">
            <img className='details-img' src="https://images.pexels.com/photos/2287506/pexels-photo-2287506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bball city"></img>
            <p className="details-text">Name: {exercise.name}</p>
            <p className="details-text">Muscles Focused: {exercise.focus}</p>
            <p className="details-text">Description: {exercise.description}</p>
        </div>
    )

}

export default Details;