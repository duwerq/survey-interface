import React, {Component} from 'react';
import logo from './logo.svg';
import './style/ionicons.css'
import './App.css';

class SelectOption extends Component {
  constructor(){
    super();
      this.state = {
        active: false,
      }
    this._handleClick = this._handleClick.bind(this)
  } 

  _handleClick() {
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    return (
      <div 
        style={{
          display: "flex", 
          flexDirection: "row", 
          width: "200px", 
          height: "40px", 
          border: "1px solid rgba(59,94,84,0.6)", 
          borderRadius: "3px", 
          margin: "10px 10px 10px 0",
          justifyContent: "space-between",
          cursor: "pointer"

        }}
        onClick={this._handleClick}
      >
        <div style={{border: this.state.active ? "3px solid rgba(59,94,84,0.6)" : "none", width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between"}}>
          <div style={{alignSelf: "center", paddingLeft: "10px"}}>
          option
          </div>
          {this.state.active ? <div className="ion-checkmark" style={{alignSelf: "center", marginRight: "10px", color: "rgba(59,94,84,0.6)"}}/> : null}
        </div>
      </div>
    );
  }
}

export default SelectOption;
