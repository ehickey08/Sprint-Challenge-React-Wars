import React, {useState} from 'react'
import Film from './Film'
import {Modal} from 'antd'

function Films(props) {
    const [visible, setVisible] = useState(false);
    let filmList = props.specificFilms
    let filmIDs = filmList.join('').match(/\d/g).map(Number)
    let filmsToDisplay = props.allFilms.filter(film => {
        if(filmIDs.includes(film.episode_id))
            return film
    }).sort((a,b) => a.episode_id>b.episode_id ? 1 : -1)
    
    return (
        <div>
            <button onClick ={() => setVisible(true)}>Display films</button>
            <Modal
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            >
                {filmsToDisplay.map(film => <Film film={film} key={film.release_date} />)}
            </Modal>
        </div>
    )
}

export default Films
