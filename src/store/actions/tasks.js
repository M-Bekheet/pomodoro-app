import uuid from 'uuid';

export const addTask = task => {
  const {title, items} = task;
  const itemsContainer = items.map(item => ({
    item,
    id: uuid(),
    checked: false
  }))

  const newTask = {
    type: 'ADD_TASK',
    task: {
      title,
      items:  itemsContainer,
      id: uuid()
    }
  }
  return newTask
}

export const removeTask = id => ({
  type: 'REMOVE_TASK',
  id
})

export const findTask = id => ({
  type: 'FIND_TASK',
  id
})

export const removeItem = (taskId, itemId) => {
  return {
    type: 'REMOVE_ITEM',
    taskId,
    itemId
  }
}

export const checkItem = (taskId, itemId) => {
  return {
    type: 'CHECK_ITEM',
    taskId,
    itemId
  }
}

