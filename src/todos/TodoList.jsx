import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
  todos = [],
}) => {
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo, idx) => (
        <TodoListItem
          todo={todo}
          key={idx}
          onRemovedPressed={onRemovedPressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );
  useEffect(() => {
    startLoadingTodos();
  }, []);
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovedPressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
