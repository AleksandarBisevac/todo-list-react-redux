import fetch from 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadTodos } from '../thunks/thunks';

describe('The loadTodos thunk', () => {
  it('Dispatches the correct actions in the success scenario', async () => {
    // sinon imitates dispatch function, it tracks arguments that were provided
    const fakeDispatch = sinon.spy();

    // we make fake response data, it doesn't matter if the structure is not totally correct, because our test doesn't depend on it
    const fakeTodos = [{ text: '1' }, { text: '2' }];
    //fetchMock.get will imitate AJAX, and when it "sends" HTTPS request, it will just return what we pass as a second argument to this method
    fetchMock.get(process.env.API_TODOS, fakeTodos);

    const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_SUCCESS',
      payload: {
        todos: fakeTodos,
      },
    };

    await loadTodos()(fakeDispatch);

    //actual test:

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

    //we reset fetchMock to because we changed it behaviour in the 15th line of code.
    fetchMock.reset();
  });
});
