import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      playerTurn: false,
      player1:[],
      player2:[]
    }
  }
   handleClick = (index) => {
    const {squares} = this.state;
    const {playerTurn} = this.state;
    const {player1} = this.state;
    const {player2} = this.state;
  


    if(squares[index] !== ""){
      return;
    }

    if(playerTurn === false){
      squares[index] = "❌"
    } else {
      squares[ index ] = "⭕️"
    }

    if(!playerTurn){
      player1.push(index);
      this.checkGame(player1);
    } else {
      player2.push(index);
    }

  

    this.setState({squares:squares})
    this.setState({playerTurn:!playerTurn}) 

    
    
  }


  checkGame = (player) => {
    console.log(player);
    let winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
   ] 
    
   for (let i = 0; i < winConditions.length; ++i){
     for (let j = 0; j < winConditions[i].length; ++j){
       
     }
   }

     
     
       if(winConditions.includes(player)){
         console.log(`player1 wins`);
       }
     

     
       
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
