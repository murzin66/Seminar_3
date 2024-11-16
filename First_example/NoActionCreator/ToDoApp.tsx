import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from './action';  // Импортируем типы действий

// Тип для пропсов компонента (с получением списка задач)
type TodoAppProps = {
  todos: { id: number; text: string }[];
}

const TodoApp: React.FC<TodoAppProps> = ({ todos }) => {
  const [todoText, setTodoText] = useState<string>('');  // Типизируем todoText как строку
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      // Создаем объект действия для добавления todo
      const action = {
        type: ADD_TODO,
        payload: {
          id: Date.now(),  // Генерация уникального id
          text: todoText,   // Текст задачи
        },
      };

      // Отправляем объект действия в dispatch
      dispatch(action);
      setTodoText('');  // Очищаем текстовое поле
    }
  };

  const handleRemoveTodo = (id: number) => {
    // Создаем объект действия для удаления todo
    const action = {
      type: REMOVE_TODO,
      payload: id,  // ID задачи для удаления
    };

    // Отправляем объект действия в dispatch
    dispatch(action);
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}  // Обновляем текстовое поле
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
