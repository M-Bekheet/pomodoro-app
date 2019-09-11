export const loadLocalTasks = () => JSON.parse( localStorage.getItem('pomodoro-tasks') ) || [];

export const setLocalTasks = tasks => localStorage.setItem('pomodoro-tasks', JSON.stringify(tasks));

