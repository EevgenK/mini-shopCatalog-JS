import { createModal } from './createModal';
import { findProduct } from './findProduct';

import { choseItem } from './choseItem';

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-info')) {
    const product = findProduct(e.target);
    createModal(product);
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', evt => choseItem(evt));
  }
  if (e.target.classList.contains('item-checkbox')) {
    console.log('check');
  }
  choseItem(e);
}

export { onClick };
