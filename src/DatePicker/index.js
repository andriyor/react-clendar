import React, { useState } from 'react';

import moment from 'moment';

import Days from './Days';
import Week from './Week';
import Button from '../Button';

import './style.css';

const DatePicker = () => {
  
  const [shown, setShown] = useState(moment());
  const [picked, setPicked] = useState(moment());
  
  const showMonth = (months) => {
    const shownM = shown.clone().add(months, 'months');
    setShown(shownM);
  }
  
  const quickPick = (days) => {
    const picked = moment().add(days, 'days');
    const shown = picked.clone();
    setShown(shown);
    setPicked(picked);
  }
  
  const pick = (date) => {
    const picked = date.clone();
    const shown = picked.clone();
    setShown(shown);
    setPicked(picked);
  }
  
  return (
    <div className="date-picker">
      <ul className="date-picker__head">
        <li>
          <Button filled onClick={() => showMonth(-1)}>‹</Button>
        </li>
        <li>
          <Button filled onClick={() => quickPick(0)}>hoy</Button>
          <Button filled onClick={() => quickPick(1)}>mañana</Button>
        </li>
        <li>
          <Button filled onClick={() => showMonth(1)}>›</Button>
        </li>
      </ul>
      <div className="date-picker__month">{shown.format('MMMM')}</div>
      <Week/>
      <Days shown={shown} picked={picked} onPick={date => pick(date)}/>
    </div>
  );
}

export default DatePicker;
