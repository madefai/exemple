import React, { Component } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class calendar1 extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    this.setState({
      selectedDay: modifiers.selected ? undefined : day,
    });
  }
  render() {
    const disabledDays = {
      
        daysOfWeek: [0, 6],
      
     
    };
    
    
   
    return (
      <div>
      <DayPicker
        showOutsideDays
        selectedDays={this.state.selectedDay}
        disabledDays={[new Date(2020, 8, 10),new Date(2020, 8, 9), { daysOfWeek: [0, 6] }]}
        onDayClick={this.handleDayClick}
        
        
      />
      <div>
        {this.state.selectedDay
          ? this.state.selectedDay.toLocaleDateString()
          : 'Please select a day.'}
      </div>
    </div>
    );
  }
}

export default calendar1;
