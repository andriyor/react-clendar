import React from 'react';
import classNames from 'classnames';

const mapDates = ({ date, className, onClick }) => (
  <li key={date.unix()}>
    <button className={className} onClick={onClick}>{date.format('D')}</button>
  </li>
);

const Days = ({ shown, picked, onPick }) => {

  const days = shown
    .clone()
    .startOf('month')
    .startOf('week');
  
  const dates = [];

  while (dates.length < 42) {

    const date = days
      .clone()
      .add(dates.length, 'days');
    
    const className = classNames('date-picker__day', {
      'date-picker__day--out': !date.isSame(shown, 'month'),
      'date-picker__day--picked': date.isSame(picked, 'day'),
    });

    const onClick = () => onPick(date);

    dates.push({ date, className, onClick });
  }

  return (
    <ul className="date-picker__days">
      { dates.map(mapDates) }
    </ul>
  );
};

export default Days;
