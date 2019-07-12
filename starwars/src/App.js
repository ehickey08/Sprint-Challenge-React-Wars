import React, {useState, useEffect} from 'react';
import People from './components/People'
import {Spin, Button, Icon} from 'antd'
import axios from 'axios'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [nextPage, setNextPage] = useState('');
const [prevPage, setPrevPage] = useState('');
const [people, setPeople] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [films, setFilms] = useState([]);

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

  return (
    <div className="App">
        <h1 className="Header">React Wars</h1>
        {isLoading && <Spin size='large' />}
        <People people={people} films={films}/>
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
    </div>
  );
}

export default App;
