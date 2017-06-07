import React, { Component } from 'react';
import './App.css';

import SelectOption from './SelectOption'

class MultiSelect extends Component {
  constructor(){
    super();
      this.state = {
        active: null,
      }
    this._handleClick = this._handleClick.bind(this);
  } 

  _handleClick(index){
    this.setState({
      active: index
    })
  }

  render() {
    console.log('this props', this.props)
    return (
      <div className="multi-select-container">
        {this.props.options.map((option, i) => {
          
          return(
            <SelectOption option={option} index={i} onSelect={this._handleClick}/>
          )
        })}
      </div>
    )
  }
}
export default MultiSelect