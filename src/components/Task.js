import React from 'react'
import Timer from './Timer';
import Button from '@material-ui/core/Button';
import TodosInput from './TodosInput/TodosInput';
import Todos from '../container/todos/Todos';

class Task extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      duration: null,
      timerOn: false,
      alert: false,
      taskEnded: true,
      disableInput: false
    }
  }
  startTimer = () => {
    if (typeof this.state.duration === 'number'){
      this.setState({ timerOn: !this.state.timerOn, alert: false, taskEnded: false, disableInput: true })
    } else{
      this.setState({ alert: true });
    }
     
  }
  timerEnded = ()=> {
    this.setState({timerOn: false, taskEnded: true, disableInput: false})
  }
  onMinituesChange = e => {

    if(e) e.preventDefault()
    //textInput is passed when Enter key is pressed(form submmitted)
    const inputValue = this.textInput.value === undefined ? e.target.value : this.textInput.value;

    
    if(this.state.timerOn) return null;
    let duration = inputValue.toString();
    const correct = duration.match(/^-?\d+$/);
    if(correct || duration === '') {
      duration = parseInt(duration) || null;
      this.setState({duration})
    }
  }
  onKeyPressed = e =>{
    if(e.key === 'Enter' && this.state.duration) {
      // this.setState({timerOn: !this.state.timerOn, taskEnded: false, alert: false})
    }
  }
  endTask = e => this.setState({ taskEnded: true, timerOn: false, alert: false, disableInput: false})


  render(){
      return (
        <div className="task">
          <TodosInput />
          <Todos />
          <form noValidate autoComplete="off" onSubmit={this.onMinituesChange}>
            <input
              id="task_input"
              placeholder="Task Minutes"
              value={this.state.duration || ''}
              onChange={this.onMinituesChange}
              ref={input => this.textInput=input}
              disabled={this.state.disableInput}
              onKeyDown={this.onKeyPressed}
            />

            <Button type="button" color="secondary" onClick={this.startTimer} className='task_btn' >
              {!this.state.timerOn ? 'Start Task' : 'Pause Task'}
            </Button>
                     
          <Button 
            type="button" 
            color="secondary" 
            onClick={this.endTask} 
            className='task_btn'
            style={{ display: this.state.taskEnded ? 'none' : 'inline-block' }}
            >
              End Task
          </Button>
                     
            {
              !this.state.taskEnded && (
                <Timer 
                  duration={this.state.duration} 
                  timerEnded={this.timerEnded} 
                  timerOn={this.state.timerOn} 
                />
              )
            }

           <div className={this.state.alert ? 'alert active' : 'alert'} >Please, add correct time for the task.</div>
          </form>          
        </div>
      )
}

}

export default Task
