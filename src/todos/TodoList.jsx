import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from '../store/selectors';
import { removeTodoRequest, completeTodoRequest } from '../thunks/thunks';
import { loadTodos } from '../thunks/thunks';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({
  onRemovedPressed,
  onCompletePressed,
  isLoading,
  startLoadingTodos,
  completedTodos = [],
  incompleteTodos = [],
}) => {
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      {incompleteTodos.length ? (
        <>
          <h3>To do:</h3>
          {incompleteTodos.map((todo, idx) => (
            <TodoListItem
              todo={todo}
              key={idx}
              onRemovedPressed={onRemovedPressed}
              onCompletePressed={onCompletePressed}
            />
          ))}
        </>
      ) : null}
      {completedTodos.length ? (
        <>
          <h3>Completed:</h3>
          {completedTodos.map((todo, idx) => (
            <TodoListItem
              todo={todo}
              key={idx}
              onRemovedPressed={onRemovedPressed}
              onCompletePressed={onCompletePressed}
            />
          ))}
        </>
      ) : null}
    </div>
  );
  useEffect(() => {
    startLoadingTodos();
  }, []);
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovedPressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
