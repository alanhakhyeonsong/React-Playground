import React, { useState, useCallback, useRef } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { onInsert, onRemove, onToggle } from './functions/todoFunctions';

type todo = {
  id: number; text: string; checked: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const nextId = useRef(1);

  const insertTodo = onInsert(todos, setTodos, nextId);
  const removeTodo = onRemove(todos, setTodos);
  const toggleTodo = onToggle(todos, setTodos);

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