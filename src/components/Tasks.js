import React from 'react';
import Task from './Task';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  card: {
    width: 425,
    maxWidth: '90%',
    margin: 30
  },
  taskWrapper: {
    margin: 'auto'
  }
});

const Tasks = () => {
  const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Task
        </Typography>
        <div className={classes.taskWrapper}>
          <Task/>
        </div>
        </CardContent>
      </Card>
    )
}

const mapStateToProps = state => ({
  tasksList: Tasks
})
export default connect(mapStateToProps)(Tasks);
