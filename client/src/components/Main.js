import React from 'react';
import './Main.css';

const Main = () => {

    const myStyle={
        backgroundImage: 
        "url('https://images.pexels.com/photos/2277978/pexels-photo-2277978.jpeg')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <header className="intro-header">
                <h1 className='intro-text'> Create a workout designed for you by you!</h1>
            </header>
        </div>
    );
};

export default Main;