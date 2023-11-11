import React from 'react';

type todo = {
  id: number; text: string; checked: boolean;
};

type TodoListItemProps = {
  todo: todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return <div>
    <ul id="myUL">
        <li className={todo.checked ? 'checked' : ''}>
          {todo.text}
          <span className="close">x</span>
        </li>
      </ul>
  </div>
}

export default TodoListItem;