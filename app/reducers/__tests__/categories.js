import categories from '../categories';

describe('initial state', () => {
  it('contains empty array of categories', () => {
    const initialState = categories(undefined, {});
    expect(initialState.records).toEqual([]);
  });

  it('has current id set to 0', () => {
    const initialState = categories(undefined, {});
    expect(initialState.currentId).toBe(0);
  });
});
