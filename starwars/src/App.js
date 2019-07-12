import React, { Component } from 'react';
import './App.scss';
import StarWarsCharacters from './components/StarWarsCharacters'
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: `https://swapi.co/api/people/`,
      search: ''
    };
  }

  componentDidMount(url) {
      if(!url) url=this.state.next
    this.getCharacters(url);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({next: data.next})
        this.setState({prev: data.previous})
        this.setState({starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  displayItems = (key) => {
    const newArray = this.state.starwarsChars.filter(char => char.created === key);
    newArray[0].clicked = !newArray[0].clicked;
    this.setState(prevState => ({
        starwarsChars: [...prevState.starwarsChars]
    }))
  }

  nextPage = () => {
      if(this.state.next===null) return
    this.componentDidMount(this.state.next)
  }

  previousPage = () => {
      if(this.state.prev ===null) return
      this.componentDidMount(this.state.prev)
  }

  search = (event) => {
    this.setState({
        search: event.target.value
    }, () => this.componentDidMount(`https://swapi.co/api/people/?search=${this.state.search}`))

    
  }
  render() {
    return (
      <div className="App-container">
        <h1 className="Header">React Wars</h1>
        <div className = 'buttons'>
            <button onClick = {this.previousPage}>Previous Page</button>
            <button onClick = {this.nextPage}>Next Page</button>
        </div>
        <input 
            onChange = {this.search} 
            className = 'search' 
            placeholder = 'Search for characters...' 
            value = {this.state.search}>    
        </input>
        <StarWarsCharacters 
            listOfChar = {this.state.starwarsChars}
            displayItems = {this.displayItems}
        />
      </div>
    );
  }
}

export default App;
