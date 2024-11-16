// store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer';  // Импортируем редьюсер

export const store = configureStore({
  reducer:  todoReducer  // Подключаем редьюсер todos
});

// Типизация состояния и dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
