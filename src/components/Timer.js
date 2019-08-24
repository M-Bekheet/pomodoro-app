import React from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      duration: this.props.duration,
      minutes: null,
      hours: null,
      seconds: null,
      timerOn: this.props.timerOn
    }
  }
  calcTime = () => { //duration is in minutes
    if(!this.props.timerOn) return 0;
    let {duration, hours, minutes, seconds} = this.state;
    hours = hours === null ? Math.floor(duration / 60) : hours ;
    minutes = minutes === null ? duration - hours * 60 : minutes ;
    seconds = seconds || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      this.props.timerEnded();
      return clearInterval(this.timerInterval)
    }

    hours = hours > 0 && minutes === 0 && seconds === 0 ? hours - 1 : hours;
    minutes = seconds === 0 && minutes > 0 ? minutes - 1 : minutes;
    seconds = minutes === 0 && seconds > 0 ? seconds - 1 : seconds === 0 ? 59 : seconds - 1

    duration = (hours*60 + minutes + seconds/60).toFixed(2);
    this.setState({hours,minutes, seconds, duration})
  }

  componentDidMount(){
    this.calcTime()
    this.timerInterval = this.state.duration ? setInterval(() => {
      this.calcTime()
    }, 1000) : null;

  }
  componentWillUnmount(){
    clearInterval(this.timerInterval)
  }
  render(){
    const {hours, minutes, seconds} = this.state;
    return (
      <div className="timer">
        {this.state.seconds ? (<div>
          <span className="hours">{hours}</span>:
          <span className="minutes">{minutes}</span>:
          <span className="seconds">{seconds}</span>
        </div>) : null}
      </div>
    )
  }
}

export default Timer
