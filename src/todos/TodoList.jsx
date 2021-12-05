import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../store/actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ onRemovedPressed, todos = [] }) => {
  return (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo, idx) => (
        <TodoListItem
          todo={todo}
          key={idx}
          onRemovedPressed={onRemovedPressed}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
