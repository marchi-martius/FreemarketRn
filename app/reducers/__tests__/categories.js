import reducer, {
  requestCategories,
  categoriesSuccess,
  categoriesError,
  selectCategory,
} from '../categories';

describe('list', () => {
  describe('initial state', () => {
    it('is completed', () => {
      const { list } = reducer();

      expect(list.completed).toBeTruthy();
    });

    it('contains empty array of records', () => {
      const { list } = reducer();

      expect(list.records).toEqual([]);
    });

    it('is not error', () => {
      const { list } = reducer();

      expect(list.error).toBeNull();
    });
  });

  it('is not completed on request', () => {
    const { list } = reducer(undefined, requestCategories());

    expect(list.completed).toBeFalsy();
  });

  it('replaces records on success', () => {
    const categories = [
      { id: 1, name: 'Antiques' },
      { id: 2, name: 'Home Decor' },
    ];
    const { list } = reducer(undefined, categoriesSuccess(categories));

    expect(list.records).toEqual(categories);
  });

  it('completes on request', () => {
    const { list } = reducer(undefined, categoriesSuccess());

    expect(list.completed).toBeTruthy();
  });

  it('set error on failure', () => {
    const error = {};
    const { list } = reducer(undefined, categoriesError(error));

    expect(list.error).toEqual(error);
  });

  it('completes on error', () => {
    const { list } = reducer(undefined, categoriesError());

    expect(list.completed).toBeTruthy();
  });
});

describe('current', () => {
  describe('initial state', () => {
    it('is an empty category', () => {
      const { current } = reducer();

      expect(current).toEqual({ id: -1, name: '' });
    });
  });

  it('updates self on category select', () => {
    const selectedCategory = { id: 1, name: 'Antiques' };
    const { current } = reducer(undefined, selectCategory(selectedCategory));

    expect(current).toEqual(selectedCategory);
  });
});
