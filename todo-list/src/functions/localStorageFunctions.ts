type todo = {
  id: number; text: string; checked: boolean;
};

export const saveTodosToLocalStorage = (todos: todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadTodosFromLocalStorage = (): todo[] => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};