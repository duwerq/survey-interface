import React, { Component } from 'react';
import './App.css';

import SelectOption from './SelectOption'

class MultiSelect extends Component {
  constructor(props){
    super(props);
      this.state = {
        selected: this.props.selected.length < 1 ? this.props.options.map((option, i) => {return {option: option, active: false}}) : this.props.selected
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
    console.log('this props', this.state.selected)
    return (
      <div className="multi-select-container">
       
        {this.state.selected.map((option, i) => {
          return(
            <SelectOption active={option.active} option={option.option} index={i} onSelect={this._handleClick}/>
          )  
       })}
          
    
       
      </div>
    )
  }
}
export default MultiSelect