type todo = {
  id: number; text: string; checked: boolean;
};

export const onInsert = (todos: todo[], setTodos: React.Dispatch<React.SetStateAction<todo[]>>, nextId: React.MutableRefObject<number>) => (text: string) => {
  const todo = {
    id: nextId.current,
    text,
    checked: false,
  };
  setTodos(todos.concat(todo));
  nextId.current += 1;
};

export const onRemove = (todos: todo[], setTodos: React.Dispatch<React.SetStateAction<todo[]>>) => (id: number) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

export const onToggle = (todos: todo[], setTodos: React.Dispatch<React.SetStateAction<todo[]>>) => (id: number) => {
  setTodos(
    todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  );
};