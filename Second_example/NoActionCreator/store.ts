// store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer'; // Импортируем редьюсер

// Создание store с подключением редьюсера
export const store = configureStore({
  reducer: todoReducer  // Подключаем редьюсер todos
});

// Тип для состояния Redux
export type RootState = ReturnType<typeof store.getState>;
// Тип для dispatch
export type AppDispatch = typeof store.dispatch;
