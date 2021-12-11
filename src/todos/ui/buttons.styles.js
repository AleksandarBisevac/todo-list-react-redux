import styled from 'styled-components';

export const Button_cs = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  color: #000411;
`;

export const Button_Todo_cs = styled(Button_cs)`
  display: inline-block;
`;

export const Button_NewTodo_cs = styled(Button_Todo_cs)`
  margin-left: 8px;
  width: 20%;
  background-color: #efcb68;
`;

export const Button_Completed_cs = styled(Button_Todo_cs)`
  background-color: #aeb7b3;
  text-decoration: line-through;
  opacity: 0.7;
  cursor: auto;
`;
export const Button_NotCompleted_cs = styled(Button_Todo_cs)`
  display: inline-block;
  background-color: #efcb68;
`;

export const Button_Remove_cs = styled(Button_Todo_cs)`
  background-color: #160c28;
  color: #e1efe6;
  margin-left: 8px;
`;
