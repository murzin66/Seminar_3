import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from './action';  // Импортируем тип действия

const TodoApp = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    // Создаем объект действия непосредственно в компоненте
    const action = {
      type: ADD_TODO,  // Указываем тип действия
      payload: {
        id: Date.now(),  // Генерация уникального id
        text,             // Текст задачи
      },
    };

    // Отправляем объект действия в dispatch
    dispatch(action);
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}  // Обновляем текстовое поле
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoApp;
