import React, { Component } from 'react';
import './App.css';

import MultiChoice from './MultiChoice'

class MultiChoiceContainer extends Component {
  constructor(){
    super();
      this.state = {
        active: null,
      }
    this._selected = this._selected.bind(this);
  } 

  _selected(index){
    this.setState({
      active: index
    })
  }

  render() {
    let options = ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150']
    return (
      <div className="multi-choice-container">
        <div>{this.props.question}</div>
        {options.map((image, i) => {
          console.log("image", image)
          return(
            <MultiChoice
              imageURL={image} 
              onSelect={this._selected}
              key={i}
              index={i}
              active={this.state.active === i ? "highlight" : ""}
           />
          )
        })}
      </div>
    )
  }
}
export default MultiChoiceContainer;