import React from 'react';
import { format, differenceInDays, compareAsc } from "date-fns";

// Constants
import { DATE_FORMAT } from 'constants/constants';

import './App.scss';


function App() {
  const openDeadlineReminder = () => {
    const deadline = new Date(2021, 8, 19); // month is 0-indexed
    const today = new Date();

    if (compareAsc(deadline, today) !== 1) {
      alert("You passed your deadline boi!");
    } else {
      const daysLeft = differenceInDays(deadline, today);
      alert(`You have your deadline is ${format(deadline, DATE_FORMAT)} and you have ${daysLeft} days left.`);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>App initialized with Typescript and Bootstrap 5.1.0</h1>
          <div className="w-100 d-flex">
            <button className="btn btn-lg btn-dark ms-auto" onClick={openDeadlineReminder}>Click Me!</button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
