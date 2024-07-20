const findDuplicateItem = (arr, product) =>
  arr.some(({ id }) => id === product.id);
export { findDuplicateItem };
