import React, { Component } from 'react';
import './App.css';

import MultiChoiceOption from './MultiChoiceOption'

class MultiChoice extends Component {
  constructor(props){
    super(props);
      this.state = {
        active: this.props.active,
      }
    this._selected = this._selected.bind(this);
  } 

  _selected(index){
    this.setState({
      active: index
    })
    this.props.onSelect(index)
  }

  render() {
   console.log("multi choice", this.state)
    return (
      <div className="multi-choice-container">
        {this.props.options.map((image, i) => {
          console.log("image", image)
          return(
            <MultiChoiceOption
              imageURL={image} 
              onSelect={() => this._selected(i)}
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
export default MultiChoice;