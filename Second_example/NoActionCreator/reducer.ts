// reducer.ts
import { TodoActions, ADD_TODO } from './action'; // Импортируем типы и действия

interface TodoState {
  todos: { id: number; text: string }[];
}

const initialState: TodoState = {
  todos: [],
};

// Редьюсер для обработки действий
const todoReducer = (state: TodoState = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],  // Добавление нового todo в список
      };
    default:
      return state;
  }
};

export default todoReducer;
