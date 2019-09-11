import React from 'react';
import Task from './Task';
import {connect} from 'react-redux';

export const Tasks = ({tasks}) => {
  return(
    tasks.length > 0 ? (
      <div>
        <h1 className="center">Pomodoro Tasks</h1>
        <div className="content-container">
          {
            tasks.length > 0 && tasks.map( (task, index) => (
                <Task key={`task_${index}`} task={task} />
            ))
          }
        </div>
      </div>
    ) : (
      <div className="content-container">
        <div className="no-tasks">Please Add Tasks</div>
      </div>
    )
  )
}

const mapStateToProps = ({tasks}) => {
  return {tasks}
} 

export default connect(mapStateToProps)(Tasks);