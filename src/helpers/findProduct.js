import { instruments } from './instruments';

function findProduct(elem) {
  const productID = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productID);
}
export { findProduct };
