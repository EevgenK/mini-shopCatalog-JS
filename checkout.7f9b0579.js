!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}})),i.register("7jJJd",(function(e,n){t(e.exports,"common",(function(){return r}));var r={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_DUPLICATE_BASKET:"duplicate_basket "};document.querySelector(".js-list")})),i.register("dxQst",(function(e,n){t(e.exports,"viewMarketing",(function(){return a}));var r=i("6aO2n"),o=i("4Q69g");function a(t){var e=Date.parse("2024-08-03"),n=null,i=e-Date.now();if(i>0)var a=setTimeout((function(){t.insertAdjacentHTML("afterend",r.creatMarkupMarketing);var c=document.querySelector(".marketing-box"),s=document.querySelector(".marketing-close-btn"),l=document.querySelectorAll(".value"),u=20,d=setInterval((function(){s.disabled=!0,s.textContent="".concat(u-=1),u<=0&&(clearInterval(d),s.textContent="X",s.disabled=!1)}),1e3);function f(){clearInterval(n),clearInterval(a),c.classList.add("unvisible"),c.innerHTML=""}n=setInterval((function(){i=e-Date.now();for(var t=(0,o.convertMs)(i),n=0;n<l.length;n++)l[n].textContent=Object.entries(t)[n][1];i<1e3&&f()}),1e3),s.addEventListener("click",f)}),5e3)}})),i.register("6aO2n",(function(e,n){t(e.exports,"creatMarkupMarketing",(function(){return r}));var r='\n<div class="marketing-box">\n  <div class="btn-box">\n    <button class="marketing-close-btn">20</button>\n  </div>\n\n  <div class="timer">\n    <p class="timer-text">Поспішай! До кінця акції залишилось:</p>\n    <div class="field">\n      <span class="value" data-days>\n        00\n      </span>\n      <span class="label">Днів</span>\n    </div>\n    <div class="field">\n      <span class="value" data-hours>\n        00\n      </span>\n      <span class="label">Годин</span>\n    </div>\n    <div class="field">\n      <span class="value" data-minutes>\n        00\n      </span>\n      <span class="label">Хвилин</span>\n    </div>\n    <div class="field">\n      <span class="value" data-seconds>\n        00\n      </span>\n      <span class="label">Секунд</span>\n    </div>\n  \n</div></div>\n'})),i.register("4Q69g",(function(e,n){function r(t){var e=6e4,n=36e5,r=24*n;return{days:o(Math.floor(t/r)),hours:o(Math.floor(t%r/n)),minutes:o(Math.floor(t%r%n/e)),seconds:o(Math.floor(t%r%n%e/1e3))}}function o(t){return String(t).padStart(2,"0")}t(e.exports,"convertMs",(function(){return r}))})),i.register("IPVlA",(function(n,r){t(n.exports,"instruments",(function(){return c}));var o,a=i("hKHmD"),c=[{id:1,img:"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg",name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://static.dnipro-m.ua/cache/products/5100/catalog_origin_323616.jpg",name:"Перфоратор",price:3897,description:"Перфоратор бочковий Dnipro-M ВН-10 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://static.dnipro-m.ua/cache/products/9598/catalog_origin_469356.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://static.dnipro-m.ua/cache/products/2021/catalog_origin_323421.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},(o={id:6,img:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_316315.jpg",name:"Тример",price:11049},e(a)(o,"price",3699),e(a)(o,"description","Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."),o),{id:7,img:"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]})),i.register("04DUX",(function(e,n){t(e.exports,"onClick",(function(){return s}));var r=i("87LyB"),o=i("aWUWK");i("7jJJd");var a=i("73Ukf"),c=i("7Cvxs");function s(t){if(t.preventDefault(),t.target.classList.contains("js-info")){var e=(0,o.findProduct)(t.target);(0,r.createModal)(e),document.querySelector(".modal").addEventListener("click",(function(t){return(0,a.choseItem)(t)}))}if(t.target.classList.contains("item-checkbox")){var n=t.target.id;(0,c.toggleItem)(n)}(0,a.choseItem)(t)}})),i.register("87LyB",(function(e,n){t(e.exports,"createModal",(function(){return c}));var r=i("dyT35"),o=i("6kLNs"),a=i("l4yMJ");function c(t){r.create('\n   <div class="modal js-card" data-id="'.concat(t.id,'">\n   <button class="modal-close-btn basket-delete" >X</button>\n    <img class=\'modal-img\' src="').concat(t.img,'" alt="').concat(t.name,'" width="600"/>\n\t<h2>').concat(t.name,"</h2>\n\t<h3>").concat(t.price," грн.</h3>\n  <p>").concat(t.description,'</p>\n  <div class="modal-button_conteiner">\n  ').concat((0,a.isActiveLink)()?'<button class=" button js-favorite">Додати до обраного</button>':'<button class=" button js-favorite-delete">Видалити з обраного</button>','\n  <button class="button js-basket">Додати до кошика</button>\n  </div>\n  </div>\n'),{handler:null,onShow:function(t){this.handler=o.closeModal.bind(t),document.addEventListener("keydown",this.handler),document.addEventListener("click",this.handler)},onClose:function(){document.removeEventListener("keydown",this.handler)}}).show()}})),i.register("dyT35",(function(t,e){t.exports=function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,(function(t){return o(e[a][1][t]||t)}),u,u.exports,t,e,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=r('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),s=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(r(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(c)}))},close:a};return c}},{}]},{},[1])(1)})),i.register("6kLNs",(function(e,n){function r(t){("Escape"===t.key||t.target.classList.contains("modal-close-btn"))&&this.close()}t(e.exports,"closeModal",(function(){return r}))})),i.register("l4yMJ",(function(e,n){function r(){return document.querySelector("nav").children[0].outerHTML.includes("#")}t(e.exports,"isActiveLink",(function(){return r}))})),i.register("aWUWK",(function(e,n){t(e.exports,"findProduct",(function(){return o}));var r=i("IPVlA");function o(t){var e=Number(t.closest(".js-card").dataset.id);return r.instruments.find((function(t){return t.id===e}))}})),i.register("73Ukf",(function(e,n){t(e.exports,"duplicateBasket",(function(){return l})),t(e.exports,"choseItem",(function(){return u}));var r,o=i("7jJJd"),a=i("aWUWK"),c=i("hRsrp"),s=i("8B9Is"),l=null!==(r=JSON.parse(localStorage.getItem(o.common.KEY_DUPLICATE_BASKET)))&&void 0!==r?r:{};function u(t){var e,n,r=null!==(e=JSON.parse(localStorage.getItem(o.common.KEY_FAVORITE)))&&void 0!==e?e:[],i=null!==(n=JSON.parse(localStorage.getItem(o.common.KEY_BASKET)))&&void 0!==n?n:[];if(t.target.classList.contains("js-favorite")){var u=(0,a.findProduct)(t.target);if((0,s.findDuplicateItem)(r,u))return;r.push(u),localStorage.setItem(o.common.KEY_FAVORITE,JSON.stringify(r))}if(t.target.classList.contains("js-basket")){var d=(0,a.findProduct)(t.target);if(d.isDone=!1,console.log(d),(0,s.findDuplicateItem)(i,d))return l[d.id]?l[d.id]+=1:l[d.id]=2,void localStorage.setItem(o.common.KEY_DUPLICATE_BASKET,JSON.stringify(l));i.push(d),localStorage.setItem(o.common.KEY_BASKET,JSON.stringify(i))}if(t.target.classList.contains("js-favorite-delete")){var f=(0,a.findProduct)(t.target);(0,c.deleteItem)(f,r,o.common.KEY_FAVORITE)}if(t.target.classList.contains("js-basket-delete")){var p=(0,a.findProduct)(t.target);(0,c.deleteItem)(p,i,o.common.KEY_BASKET),l[p.id]=0,localStorage.setItem(o.common.KEY_DUPLICATE_BASKET,JSON.stringify(l))}}})),i.register("hRsrp",(function(e,n){function r(t,e,n){var r=e.filter((function(e){return e.id!==t.id}));localStorage.setItem(n,JSON.stringify(r)),location.reload()}t(e.exports,"deleteItem",(function(){return r}))})),i.register("8B9Is",(function(e,n){t(e.exports,"findDuplicateItem",(function(){return r}));var r=function(t,e){return t.some((function(t){return t.id===e.id}))}})),i.register("7Cvxs",(function(n,r){t(n.exports,"toggleItem",(function(){return p}));var o,a=i("dDDEV"),c=i("7jJJd"),s=i("dxQst"),l=i("j6xIc"),u=i("04DUX"),d=document.querySelector(".js-list"),f=null!==(o=JSON.parse(localStorage.getItem(c.common.KEY_BASKET)))&&void 0!==o?o:[];function p(t){var n=f.map((function(n){return Number(n.id)===Number(t)?e(a)({},n,{isDone:!n.isDone}):n}));console.log(n),f=n,localStorage.setItem(c.common.KEY_BASKET,JSON.stringify(n)),(0,l.createBasketCheckBox)(f,d)}(0,l.createBasketCheckBox)(f,d),d.addEventListener("click",u.onClick),(0,s.viewMarketing)(d)})),i.register("dDDEV",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){r.default(t,e,n[e])}))}return t};var n,r=(n=i("hKHmD"))&&n.__esModule?n:{default:n}})),i.register("j6xIc",(function(e,n){t(e.exports,"createBasketCheckBox",(function(){return o}));var r=i("73Ukf");function o(t,e){var n;n=t.length?t.map((function(t){var e=t.id,n=t.name,o=t.img,i=t.price,a=t.isDone;return' <li class="item-check js-card" data-id="'.concat(e,'">\n          <div>\n          <h4>').concat(n,"</h4>\n          <p>Кількість - ").concat(r.duplicateBasket[e]>1?r.duplicateBasket[e]:1," шт.</p>\n          <p>Сума - ").concat(r.duplicateBasket[e]>1?i*r.duplicateBasket[e]:i,' грн.</p></div>\n          <img src="').concat(o,'" alt="').concat(n,'" width="100"/>\n          <div class=\'desition-box\'>\n          <input \n          class=\'item-checkbox\'  \n          type="checkbox"\n          \n           ').concat(a?"checked":"",'\n          name="').concat(n,'" \n          id="').concat(e,' " />\n          <button class="js-basket-delete basket-delete" >X</button>\n          </div>\n          </li>')})).join(""):'<div class=\'empty\'><li>\n    <h3>Ваш кошик - порожній. Додайте будьласка товар до "Кошика"</h3>\n      <img class=\'empty-img\' src="https://thumbs.dreamstime.com/b/empty-shopping-basket-chrome-8778239.jpg\n" alt="404" width="600"\n      </li></div>',e.insertAdjacentHTML("afterbegin",n)}})),i("7Cvxs")}();
//# sourceMappingURL=checkout.7f9b0579.js.map
