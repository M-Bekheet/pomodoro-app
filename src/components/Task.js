import React from 'react'
import Timer from './Timer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from './TodosInput/TodosInput';
import Todos from '../container/todos/Todos';

class Task extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      duration: 10,
      timerOn: false,
      alert: false,
    }
  }
  startTimer = () => {
    console.log(typeof this.state.duration);
    if (typeof this.state.duration === 'number'){
      this.setState({ timerOn: !this.state.timerOn, alert: false })
    } else{
      this.setState({ alert: true });
    }
     
  }
  timerEnded = ()=> {
    this.setState({timerOn: false})
  }
  onMinituesChange = e => {
    if(this.state.timerOn) return null;
    let duration = e.target.value.toString();
    const correct = duration.match(/^-?\d+$/);
    if(correct || duration === '') {
      duration = parseInt(duration) || null;
      this.setState({duration})
    }
  }

  render(){
      return (
        <div className="task">
          <form noValidate autoComplete="off">

          <TextField
            id="outlined-with-placeholder"
            label="Task Minutes"
            placeholder="Minutes"
            margin="normal"
            variant="outlined"
            value={this.state.duration || ''}
            onChange={this.onMinituesChange}
              disabled={this.state.timerOn}
          />

          <Button color="secondary" onClick={this.startTimer} className='task_btn' >
              {this.state.timerOn ? 'Stop Now' : 'Start Task'}
          </Button>
           
            {this.state.timerOn && <Timer duration={this.state.duration} timerEnded={this.timerEnded} />}

           <div className={this.state.alert ? 'alert active' : 'alert'} >Please, add correct time for the task.</div>
          </form>          
          <Input />
          <Todos/>
        </div>
      )
}

}

export default Task
