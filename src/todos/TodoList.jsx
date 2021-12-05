import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [{ text: 'Hello' }] }) => {
  return (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo, idx) => (
        <TodoListItem todo={todo} key={idx} />
      ))}
    </div>
  );
};

export default TodoList;
