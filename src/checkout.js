import { common } from './common';
import { viewMarketing } from './marketing/marketing';
import { createBasketCheckBox } from './helpers/createBasketCheckBox';
import { onClick } from './helpers/onClick';
const list = document.querySelector('.js-list');
let check = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
createBasketCheckBox(check, list);
list.addEventListener('click', onClick);

function toggleItem(id) {
  const items = check.map(item =>
    Number(item.id) === Number(id)
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item
  );
  console.log(items);
  check = items;
  localStorage.setItem(common.KEY_BASKET, JSON.stringify(items));

  createBasketCheckBox(check, list);
}
viewMarketing(list);
export { toggleItem };
