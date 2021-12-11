import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import { AppContainer_sc } from './todos/ui/layout.styles';

const App = () => {
  return (
    <AppContainer_sc>
      <TodoList />
    </AppContainer_sc>
  );
};

export default hot(module)(App);
