import React, { useState, useCallback, useRef } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

type todo = {
  id: number; text: string; checked: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([
    
  ]);

  const nextId = useRef(1);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id: number) => {
      setTodos(
        todos.map(todo => todo.id === id? {...todo, checked: !todo.checked } : todo,)
      );
    },
    [todos],
  );

  return (
    <div className="container">
        <TodoHeader>
          <TodoInput onInsert={onInsert} />
        </TodoHeader>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
  );
}

export default App;