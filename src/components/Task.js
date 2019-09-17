import React, { useState } from 'react';
import Timer from './Timer';
import { connect } from 'react-redux';
import { removeTask, removeItem, checkItem } from '../store/actions/tasks'
import { makeStyles, Modal, Backdrop, Fade, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  lala: {
    color: 'red'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '90%',
    height: '100%',
    margin: 'auto'
  },
  button: {
    margin: '5px 10px'
  }
}));



const Task = ({task, removeTask, removeItem, checkItem, history}) => {
  console.log(history);
  const [open, setOpen] = useState(false);
  const cardRef = React.createRef()
  const classes = useStyles();
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveTask = id => removeTask(id);

  const handleRemoveItem = (taskId, itemId) => { 
    items.length === 1 && handleClose()
    removeItem(taskId, itemId); 
  }
  
  const handleCheckItem = (taskId, itemId) => {

    checkItem(taskId, itemId) }

  const {title, items, duration } = task;

  return(
    <div className="task">
      <div className="card clickable" onClick={handleOpen}>
        <h3 className="card__title">{title}</h3>
        <ul className="card__items list">
          { 
            items.map(element => (
              <li 
                className={`card-item show-dots ${element.checked ? 'checked' : ''} `}
                key={element.id}
              >
                {element.item}
              </li>
            ))
          }
        </ul>
    </div>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="task">
            <div className={`card card-modal ${classes.paper}`} ref={cardRef} >
              <h3 className="card__title">{title}</h3>
              <ul className="card__items list">
                {
                  items.map(element => (
                    <li 
                      className="card-item"
                      key={element.id}
                    >
                      <span 
                        className={`item-content clickable ${element.checked ? 'checked' : ''} `}
                        onClick={e => {handleCheckItem(task.id, element.id)}}
                        >
                        {element.item}
                      </span>
                      <span className="remove-item clickable" onClick={e => handleRemoveItem(task.id, element.id)}>X</span>
                    </li>

                  ))
                }
              </ul>
              {<div className="card_timer">
                  <Timer duration={duration} />
                </div>
              }
              <Button
                type="button"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={e => history.push(`edit/${task.id}`)}
              >
                Edit Task
              </Button>
              <Button 
                type="button" 
                color="secondary" 
                variant="contained" 
                onClick={e => handleRemoveTask(task.id)}
              >
                Remove Task
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  removeTask: id => dispatch( removeTask(id) ),
  removeItem: (taskId, itemId) => dispatch(removeItem(taskId, itemId) ),
  checkItem: (taskId, itemId) => dispatch(checkItem(taskId, itemId) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);