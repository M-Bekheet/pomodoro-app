import React from 'react'
import { connect } from 'redux';
import moment from 'moment';

const Task = () => {
  return (
    <div>
      {moment()}
    </div>
  )
}

export default connect()(Task);
