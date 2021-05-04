import React, { Component } from "react";
import Calendar from 'react-calendar'

class calendar extends Component {
  state = {
    date: new Date(),
  };
  onChange = date =>{
    this.setState({ date })
    console.log("date",date)
  } 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          
        />
      </div>
    );
  }
}

export default calendar;
