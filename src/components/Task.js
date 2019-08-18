import React from 'react'
import Timer from './Timer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const marks = [];
for(let i = 0; i <= 100; i= i+5){
  marks.push({ value: i, label: i})
}
console.log(marks)

class Task extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      duration: 20,
      timerOn: true,
    }
  }
  startTimer = () => {
    this.setState({timerOn: !this.state.timerOn})
  }
  onMinituesChange = e => {
    if(!this.state.timerOn) return null;
    const minutes = e.target.value.toString();
    const correct = minutes.match(/^-?\d+\.?\d*$/);
    if(correct) {
      this.setState({duration: minutes})
    }
  }
  render(){
    const startBtnStyle = {
      display: this.state.timerOn ? 'none' : 'block',
      margin: 'auto'
    }
    const stopBtnStyle = {
      display: this.state.timerOn ? 'block' : 'none',
      margin: 'auto'
    }
    console.log(startBtnStyle, this.state.timerOn)
      return (
        <div>
          <form noValidate autoComplete="off">

          <TextField
            id="outlined-with-placeholder"
            label="Task Minutes"
            placeholder="Minutes"
            margin="normal"
            variant="outlined"
            value={this.state.duration}
            onChange={this.onMinituesChange}
          />

          <Button color="secondary" onClick={this.startTimer} style={startBtnStyle}>
            Start Now
          </Button>
          <Button color="secondary" onClick={this.startTimer} style={stopBtnStyle}>
            Stop Now
          </Button>

            {this.state.timerOn  && <Timer duration={this.state.duration} />}

          </form>          

        </div>
      )
}

}

export default Task
