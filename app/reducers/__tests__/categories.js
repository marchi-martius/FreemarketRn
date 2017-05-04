import categories from '../../constants/categories';
import reducer from '../categories';

describe('initial state', () => {
  it('contains empty array of categories', () => {
    const initialState = reducer(undefined, {});
    expect(initialState.list).toEqual([]);
  });

  it('has current id set to 0', () => {
    const initialState = reducer(undefined, {});
    expect(initialState.current).toBe(categories[0]);
  });
});
