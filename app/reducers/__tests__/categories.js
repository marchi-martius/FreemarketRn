import categories from '../categories';

describe('initial state', () => {
  it('contains empty array of categories', () => {
    const initialState = categories(undefined, {});
    expect(initialState.list).toEqual([]);
  });

  it('has current id set to 0', () => {
    const initialState = categories(undefined, {});
    expect(initialState.current).toBe(0);
  });
});
