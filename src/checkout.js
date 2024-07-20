import { refs, common } from './common';
import { createBasketCheckBox } from './helpers/createBasketCheckBox';
import { onClick } from './helpers/onClick';

const check = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
createBasketCheckBox(check, refs.list);
refs.list.addEventListener('click', onClick);
