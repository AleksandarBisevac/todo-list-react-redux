import { expect } from 'chai';
import { todos } from '../store/reducers';

describe('The todos reducer', () => {
  /*
     First test, we are testing CREATE_TODO action  
  */
  it('Adds a new todo when CREATE_TODO action is received', () => {
    // make fake payload
    const fakeTodo = { text: 'hello', isCompleted: false };
    // we imitate action we want to test
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: {
        todo: fakeTodo,
      },
    };
    // we make original state
    const originalState = { isLoading: false, data: [] };
    // we make expected result
    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    // we are doing over test
    const actual = todos(originalState, fakeAction);

    // we are compering results
    expect(actual).to.deep.equal(expected);
  });
});
