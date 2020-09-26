import React, { useState } from 'react';

import dayjs from 'dayjs';

import Days from './Days';
import Week from './Week';
import Button from '../Button';

import './style.css';

const DatePicker = () => {
  
  const [shown, setShown] = useState(dayjs());
  const [picked, setPicked] = useState(dayjs());
  
  const showMonth = (months) => {
    const shownM = shown.clone().add(months, 'month');
    setShown(shownM);
  }
  
  const quickPick = (days) => {
    const picked = dayjs().add(days, 'day');
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
