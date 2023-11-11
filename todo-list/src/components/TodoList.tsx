import React from 'react';
import TodoListItem from './TodoListItem';

type todo = {
  id: number; text: string; checked: boolean;
};

type TodoListProps = {
  todos: todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return <div>
    {todos.map(todo => (
      <TodoListItem todo={todo} key={todo.id} />
    ))}
  </div>
}

export default TodoList;