import React from 'react';
import moment from 'moment';

const week = moment().startOf('week').subtract(1, 'day');
const days = [1, 2, 3, 4, 5, 6, 7].map(n => <li key={n}>{week.add(1, 'day').format('dd')}</li>);

const Week = () => {

  return (
    <ul className="date-picker__week">
      { days }
    </ul>
  );
};

export default Week;
