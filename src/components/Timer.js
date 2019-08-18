import React from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      duration: this.props.duration,
      hours: null,
      minutes: null,
      seconds: null
    }
  }
  calcTime = () => { //duration is in minutes
    const { duration, hours, minutes, seconds } = this.state;
    if(duration <= 0 || typeof duration !== 'number'  ) {
      return this.setState({hours: 0, minutes: 0, seconds:0})
    }
    const newHours = Math.floor(duration/60);
    const newMinutes = (duration - newHours*60) % 60;
    const newSeconds = seconds === null ? 0 : ( seconds === 0 ?  59 : seconds - 1);
    const newDuration =seconds === 0 ? duration - 1 : duration;
    console.log(minutes, seconds);
    this.setState({
      duration: newDuration, 
      hours: newHours, 
      minutes: newMinutes, 
      seconds: newSeconds
    })
  }


  componentDidMount(){
    this.timerInterval = this.state.duration ? setInterval(() => {
      this.calcTime()
    },1000) : null;

  }
  componentWillUnmount(){
    clearInterval(this.timerInterval)
  }
  render(){
 
    return (
      <div>
        {this.state.seconds ? (<div>
          <span className="hours">{this.state.hours}</span>:
          <span className="minutues">{this.state.minutes}</span>:
          <span className="seconds">{this.state.seconds}</span>
        </div>) : null}
      </div>
    )
  }
}

export default Timer
