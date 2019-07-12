import React from 'react'
import Films from './Films'

function Person(props) {
    let filmList = props.person.films
    let filmIDs = filmList.join('').match(/\d/g).map(Number)
    let films = props.films.filter(film => {
        if(filmIDs.includes(film.episode_id))
            return film
    })
    return (
        <div>
            <span>{props.person.name}</span>
            <span>{props.person.skin_color}</span>
            <Films list={films} />
        </div>
    )
}

Person.defaultProps = {
    person: []
}

export default Person
