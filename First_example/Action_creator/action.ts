import { createAction } from '@reduxjs/toolkit';

// Экшн-криэйторы для добавления и удаления задачи
export const addTodo = createAction<string>('ADD_TODO');
export const removeTodo = createAction<number>('REMOVE_TODO');