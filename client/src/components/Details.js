import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './Details.css'
import { Card } from 'react-bootstrap'

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
            <Card className="card" style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{exercise.focus}</Card.Subtitle>
                <Card.Text>
                {exercise.description}
                </Card.Text>
            </Card.Body>
            </Card>
            
        </div>
    )

}

export default Details;