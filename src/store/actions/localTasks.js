export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('pomodoro-tasks')) || [];
  return {
    type: 'GET_LOCAL_TASKS',
    tasks
  };
}

export const setTasks = tasks => ({
  type: 'SET_LOCAL_TASKS',
  tasks
})