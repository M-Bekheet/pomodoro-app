import React from 'react';
import {Button} from '@material-ui/core';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 25,//this.props.duration,  //duration is in minutes
      minutes: null,
      hours: null,
      seconds: null,
      timerOn: false,
      timerEnded: false,
      didit: false,
    }
  }
  calcTime = () => {
    if (!this.state.timerOn) return 0;
    let { duration, hours, minutes, seconds } = this.state;
    hours = hours === null ? Math.floor(duration / 60) : hours;
    minutes = minutes === null ? duration - hours * 60 : minutes;
    seconds = seconds || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      this.setState({
        timerOn: false,
        timerEnded: true
      })
      return clearInterval(this.timerInterval)
    }

    hours = hours > 0 && minutes === 0 && seconds === 0 ? hours - 1 : hours;
    minutes = seconds === 0 && minutes > 0 ? minutes - 1 : minutes;
    seconds = minutes === 0 && seconds > 0 ? seconds - 1 : seconds === 0 ? 59 : seconds - 1

    duration = (hours * 60 + minutes + seconds / 60).toFixed(2);
    console.log(typeof duration);
    this.setState({ hours, minutes, seconds, duration })
  }

  handleTimer = () => {
    this.setState({ timerOn: !this.state.timerOn })
  }
  takeBreak = () => {
    this.setState({
      minutes: null,
      hours: null,
      seconds: null,
      duration: 5, 
      timerEnded: false,
      timerOn: true
    });
    this.timerInterval = setInterval(() => {
      this.calcTime()
    }, 1000);
  }
  componentDidMount() {
    this.calcTime()
    this.timerInterval = this.state.duration ? setInterval(() => {
      this.calcTime()
    }, 1000) : null;

  }
  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="timer">
        {this.state.seconds ? (<div className="watch">
          <span className="hours">{hours}</span>:
          <span className="minutes">{minutes}</span>:
          <span className="seconds">{seconds}</span>
        </div>) : null}
        <Button onClick={this.handleTimer}>{
          this.state.timerOn  ? 'Stop Timer' : 'Start Timer'
        }</Button>
        
        { 
          this.state.timerEnded && (
            <Button type="button" onClick={e => this.takeBreak()}> Take a break </Button>
          )
        }
      </div>
    )
  }
}

export default Timer
