import { createModal } from './createModal';
import { findProduct } from './findProduct';
import { refs, common } from '../common';
import { choseItem } from './choseItem';
import { toggleItem } from '../checkout';

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-info')) {
    const product = findProduct(e.target);
    createModal(product);
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', evt => choseItem(evt));
  }
  if (e.target.classList.contains('item-checkbox')) {
    // console.log(e.target.id);
    const id = e.target.id;
    toggleItem(id);
  }
  choseItem(e);
}

export { onClick };

//  ${isDone ? 'checked' : ''}
