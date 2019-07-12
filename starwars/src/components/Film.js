import React from 'react'
import styled from 'styled-components'
function Film(props) {
    
    return (
        <ModalContainer>
            <h2>{props.film.title}</h2>
            <h4>Director: {props.film.director}</h4>
            <h4>Release Date{props.film.release_date}</h4>
        </ModalContainer>
    )
}

export default Film

const ModalContainer = styled.div`
    text-align: center;
    h2{
        text-decoration:underline;
    }
`