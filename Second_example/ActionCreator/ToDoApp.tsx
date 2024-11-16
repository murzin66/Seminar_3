import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './action';

const TodoApp = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(text));  // Генерация уникального id и добавление todo
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoApp;
