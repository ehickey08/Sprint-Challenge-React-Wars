import React, { Component } from 'react';
import './App.scss';
import StarWarsCharacters from './components/StarWarsCharacters'
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageNumber: 1
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber}`);
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
    this.setState(prevState => ({
        pageNumber: prevState.pageNumber+1
    }), () => this.componentDidMount())
  }

  previousPage = () => {
    this.setState(prevState => ({
        pageNumber: prevState.pageNumber-1
    }), () => this.componentDidMount())
  }

  render() {
    return (
      <div className="App-container">
        <h1 className="Header">React Wars</h1>
        <div className = 'buttons'>
            <button onClick = {this.previousPage}>Previous Page</button>
            <button onClick = {this.nextPage}>Next Page</button>
        </div>
        <StarWarsCharacters 
            listOfChar = {this.state.starwarsChars}
            displayItems = {this.displayItems}
        />
      </div>
    );
  }
}

export default App;
