import 'basiclightbox/dist/basicLightbox.min.css';
import { refs } from './common';
import { createMarkup } from './helpers/createMarkup';
import { instruments } from './helpers/instruments';
import { onClick } from './helpers/onClick';

createMarkup(instruments, refs.list);

refs.list.addEventListener('click', onClick);
