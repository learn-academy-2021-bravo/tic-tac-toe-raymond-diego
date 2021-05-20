import React, { Component } from 'react'

class Square extends Component{

  //  handleClick = () => {
  //    this.props.handleGamePlay(this.props.index);
  //  }

  render(){
    //console.log(this.props.handleClick);
    return(
      <>
        <div onClick={() => this.props.handleClick(this.props.index)} className="square">{this.props.value}</div>
      </>
    )
  }
}
export default Square
