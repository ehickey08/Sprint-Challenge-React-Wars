import React from 'react';
import './StarWars.scss';
import Character from './Character';

const StarWarsCharacters = props => {
    return( 
        <>
            {props.listOfChar.map(char => {
            return(
                <Character 
                    char = {char} 
                    key={char.created} 
                    displayItems = {props.displayItems}
                />
            )})}
        </>
    );
}

export default StarWarsCharacters;