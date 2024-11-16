import { createReducer } from '@reduxjs/toolkit';
import { addTodo, removeTodo } from './action';

type TodoState = {
  todos: { id: number; text: string }[];
}

// Начальное состояние
const initialState: TodoState = {
  todos: []
};

// Редьюсер
const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = { id: Date.now(), text: action.payload };
      state.todos.push(newTodo);
    })
    .addCase(removeTodo, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
});

export default todoReducer;