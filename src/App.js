import React from 'react';
import Pagination from './Pagination/Pagination';
import Calendar from './calendar/calendar'
import './App.css';
import 'react-calendar/dist/Calendar.css';
import Calendaremoji from './calendar/calendaremoji'
import Calendar1 from './calendar/calendar1'
import Mailing from './mailing/mailing'
import Emaill from './emaill'

function App() {
  return (
    <div className="App">
      <Pagination />
      <Calendar />
      <Calendaremoji />
      <Calendar1 />
      <Mailing />
      <Emaill />
    </div>
  );
}

export default App;
