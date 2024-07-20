function deleteItem(product, arr, key) {
  let newArr = arr.filter(obj => obj.id !== product.id);
  localStorage.setItem(key, JSON.stringify(newArr));
  location.reload();
}
export { deleteItem };
