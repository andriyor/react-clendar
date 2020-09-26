import React, { Component } from 'react';
import moment from 'moment';
import Button from '../Button';
import Week from './Week';
import Days from './Days';
import './style.css';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: moment()
    };
  }

  showMonth(months) {

    const shown = this.state.shown
      .clone().add(months, 'months');

    this.setState({shown});
  }

  quickPick(days) {

    const picked = moment().add(days, 'days');
    const shown = picked.clone();

    this.setState({picked, shown});
  }

  pick(date) {

    const picked = date.clone();
    const shown = picked.clone();

    this.setState({ picked, shown });
  }

  render() {
    const { shown, picked } = this.state;

    return (
      <div className="date-picker">
        <ul className="date-picker__head">
          <li>
            <Button filled onClick={ () => this.showMonth(-1) }>‹</Button>
          </li>
          <li>
            <Button filled onClick={() => this.quickPick(0)}>hoy</Button>
            <Button filled onClick={() => this.quickPick(1)}>mañana</Button>
          </li>
          <li>
            <Button filled onClick={() => this.showMonth(1)}>›</Button>
          </li>
        </ul>
        <div className="date-picker__month">{shown.format('MMMM')}</div>
        <Week />
        <Days shown={shown} picked={picked} onPick={ date => this.pick(date) } />
      </div>
    );
  }
}

export default DatePicker;
