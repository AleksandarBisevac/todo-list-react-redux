import { expect } from 'chai';
import { getCompletedTodos } from '../store/selectors';

//getCompletedTodos.resultFunc(fakeTodos) - this method returns last function that is provided to the reselect

describe('The getCompletedTodos selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [
      { text: 'say hello', isCompleted: true },
      { text: 'goodbye', isCompleted: false },
    ];
    const expected = [{ text: 'say hello', isCompleted: true }];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
