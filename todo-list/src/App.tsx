import React, { useState, useEffect, useRef } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { onInsert, onRemove, onToggle } from './functions/todoFunctions';
import { saveTodosToLocalStorage, loadTodosFromLocalStorage } from './functions/localStorageFunctions';

type todo = {
  id: number; text: string; checked: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>(loadTodosFromLocalStorage());

  const nextId = useRef(1);

  const insertTodo = onInsert(todos, setTodos, nextId);
  const removeTodo = onRemove(todos, setTodos);
  const toggleTodo = onToggle(todos, setTodos);

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  return (
    <div className="container">
        <TodoHeader>
          <TodoInput onInsert={insertTodo} />
        </TodoHeader>
        <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo} />
      </div>
  );
}

export default App;