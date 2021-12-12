import styled from 'styled-components';

export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 86400000) ? 'none' : '2px solid red';
export const ListWrapper_sc = styled.div`
  max-width: 768px;
  margin: auto;
`;

export const TodoItemContainer_sc = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px #aeb7b3;
`;

export const TodoItemContainer_warning_sc = styled(TodoItemContainer_sc)`
  border-bottom: ${(props) =>
    getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;

export const ButtonContainer_sc = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

export const FormContainer_sc = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px #aeb7b3;
`;

export const AppContainer_sc = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #000411;
  width: 100vw;
  height: 100vh;
`;
