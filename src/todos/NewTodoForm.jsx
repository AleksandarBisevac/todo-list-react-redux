import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from '../thunks/thunks';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e, key, action) => {
    if (e.key === `${key}`) {
      if (!isDuplicateText()) {
        action(inputValue);
        setInputValue('');
      }
    }
  };
  const isDuplicateText = () => {
    return todos?.some((todo) => todo.text === inputValue);
  };

  return (
    <div className='new-todo-form'>
      <input
        className='new-todo-input'
        type='text'
        placeholder='Type New ToDo here...'
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
        onKeyDown={(e) => {
          handleKeyDown(e, 'Enter', onCreatePressed);
        }}
      />
      <button
        onClick={() => {
          if (!isDuplicateText()) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
        className='btn-new-todo'
      >
        Create ToDo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
