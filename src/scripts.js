import 'basiclightbox/dist/basicLightbox.min.css';
// import { list } from './common';
import { createMarkup } from './helpers/createMarkup';
import { instruments } from './helpers/instruments';
import { onClick } from './helpers/onClick';
const list = document.querySelector('.js-list');
createMarkup(instruments, list);

list.addEventListener('click', onClick);
