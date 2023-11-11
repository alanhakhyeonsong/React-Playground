import React, { Component, useState, useCallback, useRef } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

type todo = {
  id: number; text: string; checked: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([
    {
      id: 1,
      text: 'TypeScript 공부하기',
      checked: true,
    },
    {
      id: 2,
      text: 'React로 todolist 만들기',
      checked: true,
    },
    {
      id: 3,
      text: 'Effective Java 스터디 준비',
      checked: false,
    },
    {
      id: 4,
      text: '운동하기',
      checked: false,
    },
    {
      id: 5,
      text: '밤이랑 놀기',
      checked: false,
    },
  ]);

  const nextId = useRef(6);

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

  return (
    <div className="container">
        <TodoHeader>
          <TodoInput onInsert={onInsert} />
        </TodoHeader>
        <TodoList todos={todos} />
      </div>
  );
}

export default App;