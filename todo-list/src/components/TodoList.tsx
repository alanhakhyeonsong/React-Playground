import React from 'react';
import TodoListItem from './TodoListItem';

type todo = {
  id: number; text: string; checked: boolean;
};

type TodoListProps = {
  todos: todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  return <div>
    {todos.map(todo => (
      <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
    ))}
  </div>
}

export default TodoList;