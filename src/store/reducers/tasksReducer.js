import {loadLocalTasks} from '../localTasks/localTasks';

const defaultState = loadLocalTasks();

export default (state = defaultState, action) => {
  switch(action.type){

    case 'ADD_TASK':
      return [...state, {...action.task}];
      
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.id)

    case 'CHECK_ITEM':
      return state.map(task => {
        if(task.id === action.taskId){
          task.items.forEach(item => {
            if( item.id === action.itemId ) item.checked = !item.checked;
          })
        }
        return task
      })

    case 'REMOVE_ITEM':
      return state.filter(task => {
        if(task.id === action.taskId ) {
          task.items = task.items.filter(itemElement => {
            return itemElement.id !== action.itemId
          })
          if(task.items.length === 0) { //removing the task if empty
            return null;
          }
        }
        return task
      });

    default:
      return state;
  }
}