import React, { useState, useCallback, ChangeEvent } from 'react';

type TodoInputProps = {
  onInsert: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value],
  );

  return <div>
    <form className="TodoInput" onSubmit={onSubmit}>
      <input type="text" id="myInput" placeholder="할 일을 입력하세요..." onChange={onChange} value={value} />
      <button type="submit" className="addBtn">Add</button>
    </form>
  </div>
}

export default TodoInput;