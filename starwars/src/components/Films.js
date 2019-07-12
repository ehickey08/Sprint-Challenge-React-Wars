import React from 'react'

function Films(props) {
    console.log(props)
    let titles = props.list.map(film => film.title).join(`\n`)
    return (
        <div>
            {titles}
        </div>
    )
}

export default Films
