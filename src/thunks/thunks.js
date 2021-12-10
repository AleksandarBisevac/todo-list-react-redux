import {
  loadTodosSuccess,
  loadTodosInProgress,
  loadTodosFailure,
  createTodo,
  completeTodo,
  removeTodo,
} from '../store/actions';

/*
* loadTodos - GET(s) todos from server
- loading progress action is dispatched
- AJAX call is made
- returns response and dipsatches loading succes action
*/

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch(process.env.API_TODOS);
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

/*
* addTodoRequest - POST(s) new todo to server
- has one parametar that takes string as argument, that represents text of new todo
- AJAX call is made
- response is a new todo object
- if successful, dispatch action to createTodo
*/

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch(process.env.API_TODOS, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });

    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
/*
* removeTodoRequest - DELETE(s) todo from server by todos id
- has one parametar that takes string as argument, that represents id of todo that should be removed
- AJAX call is made
- response is a message
- if successful, dispatch notification
*/

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.API_TODOS}/${id}`, {
      method: 'delete',
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo._id));
    //dispatch(displayAlert(removedTodo.message));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

/*
* completeTodoRequest - DELETE(s) todo from server by todos id
- has one parametar that takes string as argument, that represents id of todo that should be updated
- AJAX call is made
- response is an updated todo
*/
export const completeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.API_TODOS}/${id}/completed`, {
      method: 'put',
    });
    const updatedTodo = await response.json();
    dispatch(completeTodo(updatedTodo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
