import { expect } from 'chai';
import { getBorderStyleForDate } from '../todos/ui/layout.styles';

// we do not test the components themselves, we test logic inside them

describe('getBorderStyleForDate', () => {
  it('returns none when the date is less then 24h', () => {});
  const today = Date.now();
  const recentDate = new Date(Date.now() - 86400000 / 2);
  const expected = 'none';
  const actual = getBorderStyleForDate(recentDate, today);

  expect(actual).to.equal(expected);
  //
  it('returns styles for BORDER when the date is more then 24h', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 2);
    const expected = '2px solid red';
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.equal(expected);
  });
});
