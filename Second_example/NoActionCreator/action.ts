
// Тип для действия добавления todo
export const ADD_TODO = 'ADD_TODO';

// Тип для payload (данных, передаваемых в действие)
export type AddTodoPayload = {
  id: number;   // Уникальный идентификатор
  text: string; // Текст задачи
}

// Тип для действия добавления todo
export type AddTodoAction = {
  type: typeof ADD_TODO;    // Тип действия
  payload: AddTodoPayload;  // Данные, передаваемые в действие
}

// Экспортируем все типы для использования в редьюсере и других местах
export type TodoActions = AddTodoAction;
