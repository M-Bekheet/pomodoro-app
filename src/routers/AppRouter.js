import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddTask from '../components/AddTask';
import Tasks from '../components/Tasks';
import {Button} from '@material-ui/core';

const AppRouter = () => (
  <Router>
    <nav className="navbar">
      <div className="content-container">
        <ul className="navbar__list list">
          <li className="navbar-item">
            <Link to="/"><Button>Home</Button></Link>
          </li>
          <li className="navbar-item">
            <Link to="/add"><Button>Add Task</Button></Link>
          </li>
        </ul>
      </div>
    </nav>

    <Route path="/" exact component={Tasks}/>
    <Route path="/add" exact component={AddTask}/>
  </Router>
);

export default AppRouter;