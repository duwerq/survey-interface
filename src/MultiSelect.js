import React, { Component } from 'react';
import './App.css';

import SelectOption from './SelectOption'

class MultiSelect extends Component {
  constructor(){
    super();
      this.state = {
        selected: {}
      }
    this._handleClick = this._handleClick.bind(this);
  } 

  _handleClick(index, option, active){
    this.state.selected[index] = {
      option: option,
      active: active
    }
    this.props.onSelect(this.state.selected)
  }

  render() {
    console.log('this props', this.props, this.state, this.props.selected)
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