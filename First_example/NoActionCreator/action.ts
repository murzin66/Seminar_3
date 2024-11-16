// action.ts

// Типы действий
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Типы для payload
export type AddTodoPayload = {
  id: number;   // Уникальный идентификатор
  text: string; // Текст задачи
};

export type RemoveTodoPayload = number; // Тип для ID задачи, которую нужно удалить

// Типы для действий
export type AddTodoAction = {
  type: typeof ADD_TODO;    // Тип действия
  payload: AddTodoPayload;  // Данные, передаваемые в действие
};

export type RemoveTodoAction = {
  type: typeof REMOVE_TODO; // Тип действия
  payload: RemoveTodoPayload; // ID задачи, которую нужно удалить
};

// Экспортируем типы всех действий
export type TodoActions = AddTodoAction | RemoveTodoAction;
