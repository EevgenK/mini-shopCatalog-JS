var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in e){var i=e[t];delete e[t];var s={id:t,exports:{}};return n[t]=s,i.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){e[t]=n},t.parcelRequired7c6=i);var s=i("9Blu9"),o=i("2tvHf");var l=i("c1Bmg"),a=i("gyp8y");const r=document.querySelector(".js-list");!function(t,n){let e;e=t.length?t.map((({id:t,img:n,name:e})=>`\n     <li data-id="${t}" class="item js-card">\n      <img src="${n}" alt="${e}" width="300"/>\n      <h2>${e}</h2>\n      <p><a class="js-info" href="#">Більше інформації</a></p>\n      <div class='buuton-box'>\n     ${(0,o.isActiveLink)()?'<button class=" button js-favorite">Додати до обраного</button>':'<button class=" button js-favorite-delete">Видалити з обраного</button>'}\n      <button class="button js-basket">Додати до кошика</button>\n      </div>\n    </li>`)).join(""):'\n    <div class=\'empty\'><li>\n    <h3>Ваш списоко обраного - порожній. Додайте будьласка товар до "Обраного"</h3>\n      <img class=\'empty-img\' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-Un73Qljof30D6abOmjZHbGJb0ahQMDalA&s" alt="404" width="600"\n      </li></div>',n.innerHTML=e}(l.instruments,r),r.addEventListener("click",a.onClick),(0,s.viewMarketing)(r);
//# sourceMappingURL=index.430f38f0.js.map