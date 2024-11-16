import { createReducer } from '@reduxjs/toolkit';
import { addTodo } from './action';

interface TodoState {
  todos: { id: number; text: string }[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.todos.push(action.payload);  // Добавляем новое todo с id и text
  });
});

export default todoReducer;
