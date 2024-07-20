import { duplicateBasket } from './choseItem';
import { findProduct } from './findProduct';
function createBasketCheckBox(arr, item) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, name, img, price }) =>
          ` <li class="item-check js-card" data-id="${id}">
          <div>
          <h4>${name}</h4>
          <p>Кількість - ${
            duplicateBasket[id] > 1 ? duplicateBasket[id] : 1
          } шт.</p>
          <p>Сума - ${
            duplicateBasket[id] > 1 ? price * duplicateBasket[id] : price
          } грн.</p></div>
          <img src="${img}" alt="${name}" width="100"/>
          <div class='desition-box'>
          <input class='item-checkbox'  type="checkbox" name="${name}" id="${id}" />
          <button class="js-basket-delete basket-delete" >X</button>
          </div>
          </li>`
      )
      .join('');
  } else {
    markup = `<li>
    <h3>Ваш кошик - порожній. Додайте будьласка товар до "Кошика"</h3>
      <img src="https://thumbs.dreamstime.com/b/empty-shopping-basket-chrome-8778239.jpg
" alt="404" width="600"
      </li>`;
  }
  item.innerHTML = markup;
}
export { createBasketCheckBox };
