// Code CoordinatesButton Component Here
import React from 'react';
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

  handleClick = (event) => { this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    result(
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}
