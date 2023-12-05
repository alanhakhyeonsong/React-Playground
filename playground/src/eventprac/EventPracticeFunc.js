import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });

  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form, // 기존 form 내용 복사
      [e.target.name]: e.target.value // 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <input type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      >
      </input>
      <input type="text"
        name="message"
        placeholder="아무거나"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      >
      </input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;