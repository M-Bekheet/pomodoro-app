export default (tasks, id) => {
  const task = tasks.find(task => task.id === id);
  return task;
}