import React from 'react';
import {
  ButtonContainer_sc,
  TodoItemContainer_sc,
  TodoItemContainer_warning_sc,
} from './ui/layout.styles';
import {
  Button_Completed_cs,
  Button_Remove_cs,
  Button_NotCompleted_cs,
} from './ui/buttons.styles';

const TodoListItem = ({ todo, onRemovedPressed, onCompletePressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer_sc
    : TodoItemContainer_warning_sc;

  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonContainer_sc>
        {todo.isCompleted ? (
          <Button_Completed_cs disabled={true}>Completed</Button_Completed_cs>
        ) : (
          <Button_NotCompleted_cs
            onClick={() => {
              onCompletePressed(todo._id);
            }}
          >
            Mark As Completed
          </Button_NotCompleted_cs>
        )}

        <Button_Remove_cs
          onClick={() => {
            onRemovedPressed(todo._id);
          }}
        >
          Remove
        </Button_Remove_cs>
      </ButtonContainer_sc>
    </Container>
  );
};

export default TodoListItem;
