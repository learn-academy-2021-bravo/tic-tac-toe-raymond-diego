import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      playerTurn: false
    }
  }
   handleClick = (index) => {
    const {squares} = this.state;
    const {playerTurn} = this.state;
    if(playerTurn === false){
      squares[index] = "❌"
    } else {
      squares[ index ] = "⭕️"
    }
    this.setState({squares:squares})
    this.setState({playerTurn:!playerTurn}) 
    console.log(playerTurn);
  }
  

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameBoard">
          {this.state.squares.map((value, index) => {
            return <Square 
            handleClick ={this.handleClick}
            value={value}
            index={index}
            key={index}
            />
          })}
        </div>
      </>
    )
  }
}
export default App
