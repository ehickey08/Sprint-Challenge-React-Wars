import React from 'react';
import './StarWars.scss';

const Character = props => {
    return(
        <div className = "char">
            <h1 onClick = {() => {props.displayItems(props.char.created)}}>{props.char.name}</h1>
            <div className = {props.char.clicked ?'clicked' : 'closed'}>
                <h2>Skin Color: {props.char.skin_color}</h2>
                <h2>Eye color: {props.char.eye_color}</h2>
            </div>
        </div>
    );
}

export default Character;