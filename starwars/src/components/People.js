import React from 'react'
import Person from './Person'

function People(props) {
    return (
        <div>
            {props.people.map(person => 
                <Person 
                    key={person.name} 
                    person={person} 
                    films = {props.films}/>)}
        </div>
    )
}

export default People
