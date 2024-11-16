import { createAction, PayloadAction } from '@reduxjs/toolkit';

// Action creator для добавления todo, который генерирует уникальный id внутри
export const addTodo = createAction('ADD_TODO', (text) => ({
  payload: {
    id: Date.now(),  // Генерация уникального идентификатора внутри action creator
    text,
  },
}));
