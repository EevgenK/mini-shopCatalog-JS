!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},n.parcelRequired7c6=i),i.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}})),i.register("7jJJd",(function(e,n){t(e.exports,"common",(function(){return o}));var o={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_DUPLICATE_BASKET:"duplicate_basket "};document.querySelector(".js-list")})),i.register("IPVlA",(function(n,o){t(n.exports,"instruments",(function(){return a}));var r,c=i("hKHmD"),a=[{id:1,img:"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg",name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://static.dnipro-m.ua/cache/products/5100/catalog_origin_323616.jpg",name:"Перфоратор",price:3897,description:"Перфоратор бочковий Dnipro-M ВН-10 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://static.dnipro-m.ua/cache/products/9598/catalog_origin_469356.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://static.dnipro-m.ua/cache/products/2021/catalog_origin_323421.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},(r={id:6,img:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_316315.jpg",name:"Тример",price:11049},e(c)(r,"price",3699),e(c)(r,"description","Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."),r),{id:7,img:"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]})),i.register("04DUX",(function(e,n){t(e.exports,"onClick",(function(){return s}));var o=i("87LyB"),r=i("aWUWK");i("7jJJd");var c=i("73Ukf"),a=i("7Cvxs");function s(t){if(t.preventDefault(),t.target.classList.contains("js-info")){var e=(0,r.findProduct)(t.target);(0,o.createModal)(e),document.querySelector(".modal").addEventListener("click",(function(t){return(0,c.choseItem)(t)}))}if(t.target.classList.contains("item-checkbox")){var n=t.target.id;(0,a.toggleItem)(n)}(0,c.choseItem)(t)}})),i.register("87LyB",(function(e,n){t(e.exports,"createModal",(function(){return a}));var o=i("dyT35"),r=i("6kLNs"),c=i("l4yMJ");function a(t){o.create('\n   <div class="modal js-card" data-id="'.concat(t.id,"\"> \n    <img class='modal-img' src=\"").concat(t.img,'" alt="').concat(t.name,'" width="600"/>\n\t<h2>').concat(t.name,"</h2>\n\t<h3>").concat(t.price," грн.</h3>\n  <p>").concat(t.description,'</p>\n  <div class="modal-button_conteiner">\n  ').concat((0,c.isActiveLink)()?'<button class=" button js-favorite">Додати до обраного</button>':'<button class=" button js-favorite-delete">Видалити з обраного</button>','\n  <button class="button js-basket">Додати до кошика</button>\n  </div>\n  </div>\n'),{handler:null,onShow:function(t){this.handler=r.closeModal.bind(t),document.addEventListener("keydown",this.handler)},onClose:function(){document.removeEventListener("keydown",this.handler)}}).show()}})),i.register("dyT35",(function(t,e){t.exports=function t(e,n,o){function r(c,a){if(!n[c]){if(!e[c]){var s=void 0;if(!a&&s)return s(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[c]={exports:{}};e[c][0].call(l.exports,(function(t){return r(e[c][1][t]||t)}),l,l.exports,t,e,n,o)}return n[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},r=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var c=r(i,"IMG"),a=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),c=function(t){return!1!==e.onClose(a)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(a)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&c()}));var a={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(a)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(a)}))},close:c};return a}},{}]},{},[1])(1)})),i.register("6kLNs",(function(e,n){function o(t){"Escape"===t.key&&this.close()}t(e.exports,"closeModal",(function(){return o}))})),i.register("l4yMJ",(function(e,n){function o(){return document.querySelector("nav").children[0].outerHTML.includes("#")}t(e.exports,"isActiveLink",(function(){return o}))})),i.register("aWUWK",(function(e,n){t(e.exports,"findProduct",(function(){return r}));var o=i("IPVlA");function r(t){var e=Number(t.closest(".js-card").dataset.id);return o.instruments.find((function(t){return t.id===e}))}})),i.register("73Ukf",(function(e,n){t(e.exports,"duplicateBasket",(function(){return u})),t(e.exports,"choseItem",(function(){return l}));var o,r=i("7jJJd"),c=i("aWUWK"),a=i("hRsrp"),s=i("8B9Is"),u=null!==(o=JSON.parse(localStorage.getItem(r.common.KEY_DUPLICATE_BASKET)))&&void 0!==o?o:{};function l(t){var e,n,o=null!==(e=JSON.parse(localStorage.getItem(r.common.KEY_FAVORITE)))&&void 0!==e?e:[],i=null!==(n=JSON.parse(localStorage.getItem(r.common.KEY_BASKET)))&&void 0!==n?n:[];if(t.target.classList.contains("js-favorite")){var l=(0,c.findProduct)(t.target);if((0,s.findDuplicateItem)(o,l))return;o.push(l),localStorage.setItem(r.common.KEY_FAVORITE,JSON.stringify(o))}if(t.target.classList.contains("js-basket")){var d=(0,c.findProduct)(t.target);if(d.isDone=!1,console.log(d),(0,s.findDuplicateItem)(i,d))return u[d.id]?u[d.id]+=1:u[d.id]=2,void localStorage.setItem(r.common.KEY_DUPLICATE_BASKET,JSON.stringify(u));i.push(d),localStorage.setItem(r.common.KEY_BASKET,JSON.stringify(i))}if(t.target.classList.contains("js-favorite-delete")){var f=(0,c.findProduct)(t.target);(0,a.deleteItem)(f,o,r.common.KEY_FAVORITE)}if(t.target.classList.contains("js-basket-delete")){var p=(0,c.findProduct)(t.target);(0,a.deleteItem)(p,i,r.common.KEY_BASKET),u[p.id]=0,localStorage.setItem(r.common.KEY_DUPLICATE_BASKET,JSON.stringify(u))}}})),i.register("hRsrp",(function(e,n){function o(t,e,n){var o=e.filter((function(e){return e.id!==t.id}));localStorage.setItem(n,JSON.stringify(o)),location.reload()}t(e.exports,"deleteItem",(function(){return o}))})),i.register("8B9Is",(function(e,n){t(e.exports,"findDuplicateItem",(function(){return o}));var o=function(t,e){return t.some((function(t){return t.id===e.id}))}})),i.register("7Cvxs",(function(n,o){t(n.exports,"toggleItem",(function(){return f}));var r,c=i("dDDEV"),a=i("7jJJd"),s=i("j6xIc"),u=i("04DUX"),l=document.querySelector(".js-list"),d=null!==(r=JSON.parse(localStorage.getItem(a.common.KEY_BASKET)))&&void 0!==r?r:[];function f(t){var n=d.map((function(n){return Number(n.id)===Number(t)?e(c)({},n,{isDone:!n.isDone}):n}));console.log(n),d=n,localStorage.setItem(a.common.KEY_BASKET,JSON.stringify(n)),(0,s.createBasketCheckBox)(d,l)}(0,s.createBasketCheckBox)(d,l),l.addEventListener("click",u.onClick)})),i.register("dDDEV",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o.default(t,e,n[e])}))}return t};var n,o=(n=i("hKHmD"))&&n.__esModule?n:{default:n}})),i.register("j6xIc",(function(e,n){t(e.exports,"createBasketCheckBox",(function(){return r}));var o=i("73Ukf");function r(t,e){var n;n=t.length?t.map((function(t){var e=t.id,n=t.name,r=t.img,i=t.price,c=t.isDone;return' <li class="item-check js-card" data-id="'.concat(e,'">\n          <div>\n          <h4>').concat(n,"</h4>\n          <p>Кількість - ").concat(o.duplicateBasket[e]>1?o.duplicateBasket[e]:1," шт.</p>\n          <p>Сума - ").concat(o.duplicateBasket[e]>1?i*o.duplicateBasket[e]:i,' грн.</p></div>\n          <img src="').concat(r,'" alt="').concat(n,'" width="100"/>\n          <div class=\'desition-box\'>\n          <input \n          class=\'item-checkbox\'  \n          type="checkbox"\n          \n           ').concat(c?"checked":"",'\n          name="').concat(n,'" \n          id="').concat(e,' " />\n          <button class="js-basket-delete basket-delete" >X</button>\n          </div>\n          </li>')})).join(""):'<li>\n    <h3>Ваш кошик - порожній. Додайте будьласка товар до "Кошика"</h3>\n      <img src="https://thumbs.dreamstime.com/b/empty-shopping-basket-chrome-8778239.jpg\n" alt="404" width="600"\n      </li>',e.innerHTML=n}})),i("7Cvxs")}();
//# sourceMappingURL=checkout.963daaa6.js.map