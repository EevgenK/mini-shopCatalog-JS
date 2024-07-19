import { common } from '../common';
import { findProduct } from './findProduct';
function choseItem(e) {
  const favoriteArr =
    JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
  const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

  if (e.target.classList.contains('js-favorite')) {
    const product = findProduct(e.target);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
  if (e.target.classList.contains('js-basket')) {
    const product = findProduct(e.target);
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
  if (e.target.classList.contains('js-favorite-delete')) {
    const product = findProduct(e.target);

    let newFavorite = favoriteArr.filter(obj => obj.id !== product.id);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(newFavorite));
    location.reload();
  }
}
export { choseItem };
