import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Car () {
    return (
        <h2>Hello I am Jeep ; </h2>
    )
}

function Drum(props) {
    return (
        <div>
            <p>Hey I am reall drummer {props.name}!! </p>
            <p>I have a {props.brand} drum!</p>
        </div>

    )
}


function Band() {
    function playMusic() {
        alert("Jesus! It's not a music");
    }
    return(
        <div>
            <Drum 
            name = 'J'
            brand = 'Yamaha'
            />
            <button onClick = {playMusic}>play the song</button>
        </div>
    )
}

root.render(<Band />);

