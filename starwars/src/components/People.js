import React from 'react'
import Person from './Person'
import styled from 'styled-components'
function People(props) {
    return (
        <PeopleContainer>
            {props.people.map(person => 
                <Person 
                    key={person.name} 
                    person={person} 
                    films = {props.films}/>)}
        </PeopleContainer>
    )
}

export default People

const PeopleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`