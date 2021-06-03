import React, { Component } from 'react'
import Pokemons from './Pokemons.jpg'
class App extends React.Component {
  state = {
    Person: {
      fullName : "Mona Haj Nasr",
      bio : "I just love Pokemons",
      imgSrc : Pokemons,
      profession : "PHD Student"
    },
    show : true,
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  }
  render() {
    return (
      <>
      <button className='visibility-btn' onClick={this.handleShowPerson}>{this.state.show ? 'Hide Profil' : 'Show Profil' }</button>
       {this.state.show ?
         <>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <img src={this.state.Person.imgSrc} alt="Pokemons"></img>
        <h1>{this.state.Person.profession}</h1> )
        <br></br>
        
      </>
      
      :
        (<h4>Click on the button to show Profil</h4>)
  }</>
    );
  }
}



export default App;
