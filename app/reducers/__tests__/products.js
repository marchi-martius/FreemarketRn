import reducer, {
  requestProducts,
  productsSuccess,
  productsError,

  requestCreateProduct,
  createProductSuccess,
  createProductError,
} from '../products';

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
    const { list } = reducer(undefined, requestProducts());

    expect(list.completed).toBeFalsy();
  });

  it('replaces records on success', () => {
    const products = [
      { id: 1, name: 'Antiques' },
      { id: 2, name: 'Home Decor' },
    ];
    const { list } = reducer(undefined, productsSuccess(products));

    expect(list.records).toEqual(products);
  });

  it('completes on request', () => {
    const { list } = reducer(undefined, productsSuccess());

    expect(list.completed).toBeTruthy();
  });

  it('set error on failure', () => {
    const error = {};
    const { list } = reducer(undefined, productsError(error));

    expect(list.error).toEqual(error);
  });

  it('completes on error', () => {
    const { list } = reducer(undefined, productsError());

    expect(list.completed).toBeTruthy();
  });
});

describe('creator', () => {
  describe('initial state', () => {
    it('is completed', () => {
      const { creator } = reducer();

      expect(creator.completed).toBeTruthy();
    });

    it('is not error', () => {
      const { creator } = reducer();

      expect(creator.error).toBeNull();
    });
  });

  it('is not completed on request', () => {
    const { creator } = reducer(undefined, requestCreateProduct());

    expect(creator.completed).toBeFalsy();
  });

  it('completes on request', () => {
    const { creator } = reducer(undefined, createProductSuccess());

    expect(creator.completed).toBeTruthy();
  });

  it('set error on failure', () => {
    const error = {};
    const { creator } = reducer(undefined, createProductError(error));

    expect(creator.error).toEqual(error);
  });

  it('completes on error', () => {
    const { creator } = reducer(undefined, createProductError());

    expect(creator.completed).toBeTruthy();
  });
});
