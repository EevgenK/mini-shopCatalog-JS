import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { closeModal } from './closeModal';
import { isActiveLink } from './isActiveLink';
function createModal(product) {
  const instance = basicLightbox.create(
    `
   <div class="modal js-card" data-id="${product.id}"> 
    <img class='modal-img' src="${product.img}" alt="${
      product.name
    }" width="600"/>
	<h2>${product.name}</h2>
	<h3>${product.price} грн.</h3>
  <p>${product.description}</p>
  <div class="modal-button_conteiner">
  ${
    isActiveLink()
      ? `<button class=" button js-favorite">Додати до обраного</button>`
      : `<button class=" button js-favorite-delete">Видалити з обраного</button>`
  }
  <button class="button js-basket">Додати до кошика</button>
  </div>
  </div>
`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
