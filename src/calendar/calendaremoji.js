import React, { Component } from "react";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class calendaremoji extends Component {
  state = {
    
  };
 
  render() {
    var today = new Date();
 console.log("trtrtrtr",today)
    return (
      <div>
        <InfiniteCalendar
       
          width={1000}
          height={600}
          selected={today}
          disabledDays={[0,6]}
          disabledDates={[new Date(2020, 8, 10),new Date(2020, 8, 9)]}
        />
      </div>
    );
  }
}

export default calendaremoji;
