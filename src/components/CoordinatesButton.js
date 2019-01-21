// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

  handleClick = (event) => (
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates = coordinates
  )
  
  render(){
    result(
      <button onClick={this.handleClick}></button>
    )
  }
}