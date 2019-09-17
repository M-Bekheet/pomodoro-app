import React from 'react';
import Task from './Task';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

export const Tasks = ({ tasks, history}) => {
  return(
    tasks.length > 0 ? (
      <div>
        <h1 className="center">Pomodoro Tasks</h1>
        <div className="content-container">
          {
            tasks.length > 0 && tasks.map( (task, index) => (
              <Task key={`task_${index}`} task={task} history={history} />
            ))
          }
        </div>
      </div>
    ) : (
      <div className="content-container">
        <div className="no-tasks">Please <Link to="/add" className="link">Add Tasks</Link></div>
      </div>
    )
  )
}

const mapStateToProps = ({tasks}) => {
  return {tasks}
} 

export default connect(mapStateToProps)(Tasks);