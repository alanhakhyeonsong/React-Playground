import React from 'react';

type todo = {
  id: number; text: string; checked: boolean;
};

type TodoListItemProps = {
  todo: todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  const handleToggle = () => {
    onToggle(id);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(id);
  };

  return <div>
    <ul id="myUL">
        <li className={todo.checked ? 'checked' : ''} onClick={handleToggle}>
          {todo.text}
          <span className="close" onClick={handleRemove}>x</span>
        </li>
      </ul>
  </div>
}

export default TodoListItem;