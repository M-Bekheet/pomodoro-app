import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import Tasks from '../components/Tasks';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  addButton: {
    borderRadius: '50%',
    fontSize: 20,
    height: 50,
    minWidth: 'auto',
    width: 50,
    position: 'fixed',
    right: 50,
    bottom: 50
  }
}))

const AppRouter = () => {
  const classes = useStyles();
  return (
    <Router>
      <nav className="navbar">
        <div className="content-container">
          <ul className="navbar__list list">
            <li className="navbar-item">
              <Link className="link" to="/"><Button color="primary">Home</Button></Link>
            </li>
            <li className="navbar-item">
              <Link to="/add">
                <Button color="primary" variant="contained" aria-label="add" className={classes.addButton}>+</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Route path="/" exact component={Tasks} />
      <Route path="/add" exact component={AddTask}/>
      <Route path="/edit/:id" component={EditTask} />
    </Router>
  );
}

export default AppRouter;