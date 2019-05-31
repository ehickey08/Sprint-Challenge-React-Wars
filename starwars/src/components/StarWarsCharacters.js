import React from 'react';
import './StarWars.scss';
import Character from './Character';

const StarWarsCharacters = props => {
    return( 
        <div className = "allChars">
            {props.listOfChar.map(char => {
            return(
                <Character 
                    char = {char} 
                    key={char.created} 
                    displayItems = {props.displayItems}
                />
            )})}
        </div>
    );
}

export default StarWarsCharacters;