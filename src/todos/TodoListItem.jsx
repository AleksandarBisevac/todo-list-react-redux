import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovedPressed, onCompletePressed }) => {
  return (
    <div className='todo-item-container'>
      <h3>{todo.text}</h3>
      <div className='buttons-container'>
        {todo.isCompleted ? (
          <button className='btn-completed' disabled={true}>
            Completed
          </button>
        ) : (
          <button
            className='btn-not-completed'
            onClick={() => {
              onCompletePressed(todo.text);
            }}
          >
            Mark As Completed
          </button>
        )}

        <button
          className='btn-remove'
          onClick={() => {
            onRemovedPressed(todo.text);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
