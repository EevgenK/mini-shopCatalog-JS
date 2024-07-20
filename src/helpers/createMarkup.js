import { isActiveLink } from './isActiveLink';

function createMarkup(arr, elem) {
  let markup;

  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `
     <li data-id="${id}" class="item js-card">
      <img src="${img}" alt="${name}" width="300"/>
      <h2>${name}</h2>
      <p><a class="js-info" href="#">Більше інформації</a></p>
      <div>
     ${
       isActiveLink()
         ? `<button class=" button js-favorite">Додати до обраного</button>`
         : `<button class=" button js-favorite-delete">Видалити з обраного</button>`
     }
      <button class="button js-basket">Додати до кошика</button>
      </div>
    </li>`
      )
      .join('');
  } else {
    markup = `
    <li>
    <h3>Ваш списоко обраного - порожній. Додайте будьласка товар до "Обраного"</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-Un73Qljof30D6abOmjZHbGJb0ahQMDalA&s" alt="404" width="600"
      </li>`;
  }
  elem.innerHTML = markup;
}
export { createMarkup };
