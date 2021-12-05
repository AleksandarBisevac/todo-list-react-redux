import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='new-todo-form'>
      <input
        className='new-todo-input'
        type='text'
        placeholder='Type New ToDo here...'
        value={inputValue}
        onChange={() => onChangeHandler(e)}
      />
      <button className='btn-new-todo'>Create ToDo</button>
    </div>
  );
};

export default NewTodoForm;
