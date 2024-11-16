// TodoApp.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './action';
import { RootState } from './store'; // Тип для корневого состояния

const TodoApp: React.FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos.todos); // Селектор для получения todos из состояния
  const dispatch = useDispatch();

  // Обработчик для добавления задачи
  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText)); // Вызов экшн-криэйтора addTodo
      setTodoText('');
    }
  };

  // Обработчик для удаления задачи
  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id)); // Вызов экшн-криэйтора removeTodo
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
