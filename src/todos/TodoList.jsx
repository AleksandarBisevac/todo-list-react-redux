import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from '../store/selectors';
import { removeTodoRequest, completeTodoRequest } from '../thunks/thunks';
import { loadTodos } from '../thunks/thunks';

// IMPORT STYLED COMPONENTS
import { ListWrapper_sc } from './ui/layout.styles';

// IMPORT COMPONENTS
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

/****************************************
 REACT COMPONENT
****************************************/

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
    <ListWrapper_sc>
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
    </ListWrapper_sc>
  );
  useEffect(() => {
    startLoadingTodos();
  }, []);
  return isLoading ? loadingMessage : content;
};

//--------------------------------------/

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
