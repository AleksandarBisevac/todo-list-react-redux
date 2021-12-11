import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../store/selectors';
import { addTodoRequest } from '../thunks/thunks';
import { FormContainer_sc } from './ui/layout.styles';
import { Input_CreateTodo_sc } from './ui/input.styles';
import { Button_NewTodo_cs } from './ui/buttons.styles';

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
    <FormContainer_sc>
      <Input_CreateTodo_sc
        type='text'
        placeholder='Type New ToDo here...'
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
        onKeyDown={(e) => {
          handleKeyDown(e, 'Enter', onCreatePressed);
        }}
      />
      <Button_NewTodo_cs
        onClick={() => {
          if (!isDuplicateText()) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >
        Create ToDo
      </Button_NewTodo_cs>
    </FormContainer_sc>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
