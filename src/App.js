import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
//import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    };
   // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleChange = (e) => 
  {this.setState({ searchfield: e.target.value });}
  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())

    )
 
    return (
      <div className="App">
 <h1>Monstruitos</h1>
        <SearchBox 
        placeholder='Buscar Monstruo' 
        handlername={this.handleChange} />
      
   
        <CardList monsters={filteredMonsters}>

        </CardList>

      </div>);
  }
}

export default App;
