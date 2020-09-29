import React from 'react';
import axios from 'axios';
import AddToCart from './components/addToCart.js';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      gameList: [],
      currentGame:''
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
        gameList: res.data,
        currentGame: res.data[0]
      })
    })
  }

  render(){
    return (
      <div className="App">
        <AddToCart gameData = {this.state.currentGame}/>
      </div>
    );
  }
}

export default App;
