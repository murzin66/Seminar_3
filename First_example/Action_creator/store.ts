// store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer'; // Импортируем редьюсер

// Создаем store
export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

// Типизация RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
