export const loadState = () => {
    const serializedState = localStorage.getItem('todos');
    return JSON.parse(serializedState) || { Todos: {todos: []} };     
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
      }catch (err) {
          console.log(err)
    }
}
