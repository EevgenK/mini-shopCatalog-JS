import { duplicateBasket } from './choseItem';

function createBasketCheckBox(arr, item) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, name, img, price, isDone }) =>
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
          <input 
          class='item-checkbox'  
          type="checkbox"
          
           ${isDone ? 'checked' : ''}
          name="${name}" 
          id="${id} " />
          <button class="js-basket-delete basket-delete" >X</button>
          </div>
          </li>`
      )
      .join('');
  } else {
    markup = `<div class='empty'><li>
    <h3>Ваш кошик - порожній. Додайте будьласка товар до "Кошика"</h3>
      <img class='empty-img' src="https://thumbs.dreamstime.com/b/empty-shopping-basket-chrome-8778239.jpg
" alt="404" width="600"
      </li></div>`;
  }
  item.innerHTML = markup;
}

//
export { createBasketCheckBox };
