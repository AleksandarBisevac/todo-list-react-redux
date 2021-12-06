import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from '../store/actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ onRemovedPressed, onCompletePressed, todos = [] }) => {
  return (
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
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovedPressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
