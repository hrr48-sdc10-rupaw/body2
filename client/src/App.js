import React from 'react';
import axios from 'axios';

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

      </div>
    );
  }
}

export default App;
