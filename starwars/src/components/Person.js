import React, {useState} from 'react'
import Films from './Films'
import styled from 'styled-components'
function Person(props) {
    return (
        <PersonContainer>
            <h1>{props.person.name}</h1>
            <h4>Skin color: {props.person.skin_color}</h4>
            <Films allFilms={props.films} specificFilms={props.person.films} />
        </PersonContainer>
    )
}

Person.defaultProps = {
    person: []
}

export default Person

const PersonContainer = styled.div`
    margin: 15px auto;
    background: #CCE0FD;
    width: 30%;
    border-radius: 25px;

    h1{
        color: red;
        width: fit-content;
        margin: 0 auto;
        text-decoration: underline;
        margin-bottom: 5px;
    }

    h4{
        width: fit-content;
        margin: 0 auto;
    }

    button{
        color: white;
        background: #286FD9;
        border-radius: 10px;
        width: 40%;
        padding: 10px 0;
        margin: 0 auto 10px;
    }

`