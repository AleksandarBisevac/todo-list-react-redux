import { createSelector } from 'reselect';

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

// createSelector uses memoization !

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);

// export const getIncompleteTodos = createSelector(
//   getTodos,
//   getTodosLoading,
//   (todos, isLoading) =>
//     isLoading ? [] : todos.filter((todo) => !todo.isCompleted)
// );
