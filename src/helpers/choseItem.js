import { common } from '../common';
import { findProduct } from './findProduct';
import { deleteItem } from './deleteItem';
import { findDuplicateItem } from './findDuplicateItem';
let duplicateBasket =
  JSON.parse(localStorage.getItem(common.KEY_DUPLICATE_BASKET)) ?? {};
console.log(duplicateBasket);
function choseItem(e) {
  const favoriteArr =
    JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
  const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

  if (e.target.classList.contains('js-favorite')) {
    const product = findProduct(e.target);
    const inStorage = findDuplicateItem(favoriteArr, product);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
  if (e.target.classList.contains('js-basket')) {
    const product = findProduct(e.target);

    const inStorage = findDuplicateItem(basketArr, product);
    if (inStorage) {
      let check = duplicateBasket[product.id];
      check
        ? (duplicateBasket[product.id] += 1)
        : (duplicateBasket[product.id] = 2);

      console.log(duplicateBasket);
      localStorage.setItem(
        common.KEY_DUPLICATE_BASKET,
        JSON.stringify(duplicateBasket)
      );
      return;
    }
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
  if (e.target.classList.contains('js-favorite-delete')) {
    const product = findProduct(e.target);

    deleteItem(product, favoriteArr, common.KEY_FAVORITE);
  }
  if (e.target.classList.contains('js-basket-delete')) {
    const product = findProduct(e.target);

    deleteItem(product, basketArr, common.KEY_BASKET);
  }

  // let newFavorite = favoriteArr.filter(obj => obj.id !== product.id);
  // localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(newFavorite));
  // location.reload();
}
export { choseItem, duplicateBasket };
