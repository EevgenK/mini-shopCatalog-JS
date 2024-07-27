import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { onClick } from './helpers/onClick';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
createMarkup(favorite, list);
list.addEventListener('click', onClick);
