import React from 'react';
import axios from 'axios';
import AddToCart from './components/addToCart.js';
import AboutThisGame from './components/aboutThisGame.js';
import style from './css/App.css';
import SystemReqs from './components/systemReqs.js';
import ITGRTY from './components/isThisGameRTY.js';
import Attributes from './components/attributes.js';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentGame: null,
    }

    this.getGameData = this.getGameData.bind(this);
  }

  componentDidMount(){
    this.getGameData();
  }

  getGameData(){
    axios.get('http://localhost:3000/moist-air/game')
    .then((res)=>{
      this.setState({
        currentGame: res.data[0]
      })
    })
  }

  render(){
    if(!this.state.currentGame){
      return<div></div>
    }
    return (
      <div className="App">
        <AddToCart gameData = {this.state.currentGame}/>
        <AboutThisGame gameData = {this.state.currentGame}/>
        <SystemReqs gameData = {this.state.currentGame}/>
        <ITGRTY/>
        <Attributes gameData = {this.state.currentGame}/>
      </div>
    );
  }
}

export default App;
