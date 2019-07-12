import React, {useState, useEffect} from 'react';
import People from './components/People'
import {Spin, Button, Icon, Input} from 'antd'
import axios from 'axios'
import './App.css';

const {Search} = Input

const App = () => {
  
const [nextPage, setNextPage] = useState('');
const [prevPage, setPrevPage] = useState('');
const [people, setPeople] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [films, setFilms] = useState([]);
const [search, setSearch] = useState();

function fetchPeople(url){
    axios
        .get(url)
        .then(res => {
            setPrevPage(res.data.previous)
            setNextPage(res.data.next)
            setPeople(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(res => {
            setIsLoading(false)
        })
}

function fetchFilms(url){
    axios
        .get(url)
        .then(res => {
            setFilms(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(res => {
            setIsLoading(false)
        })
}

function newPage(url){
    if(!url)
        return
    setPeople([])
    setIsLoading(true)
    fetchPeople(url)
}

useEffect(() => {
    fetchFilms(`https://swapi.co/api/films`)
    fetchPeople(`https://swapi.co/api/people`)
}, []);

useEffect(() => {
    setPeople([])
    setIsLoading(true)
    fetchPeople(`https://swapi.co/api/people/?search=${search}`)
}, [search]);

  return (
    <div className="App">
        <h1 className="Header">React Wars</h1>
        <Search
            placeholder="Find your favorite character"
            onChange={e => setSearch(e.target.value)}
            style={{ width: 300 }}
        /><br></br>
        {isLoading && <Spin size='large' style={{margin: '15px'}}/>}
        <br></br>
        <Button.Group size='small'>
            <Button type="primary" onClick={() => newPage(prevPage)}>
                <Icon type="left" />
                Backward
            </Button>
            <Button type="primary" onClick={() => newPage(nextPage)}>
                Forward
                <Icon type="right" />
            </Button>
        </Button.Group>
        <People people={people} films={films}/>
    </div>
  );
}

export default App;
