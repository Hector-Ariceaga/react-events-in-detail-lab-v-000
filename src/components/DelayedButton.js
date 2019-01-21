// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

  handleClick = (event) => {
    thisEvent = event
    setTimeout(() => {
      this.props.onDelayedClick(thisEvent)
    }, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.handleClick}>Delayed</button>
    )
  }
}
