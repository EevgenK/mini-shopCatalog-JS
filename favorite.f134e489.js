function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired7c6=i),i.register("UDlvM",(function(e,n){t(e.exports,"common",(function(){return o})),t(e.exports,"refs",(function(){return i}));const o={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_DUPLICATE_BASKET:"duplicate_basket "},i={search:document.querySelector(".js-search"),list:document.querySelector(".js-list")}})),i.register("gyp8y",(function(e,n){t(e.exports,"onClick",(function(){return s}));var o=i("l5ICX"),r=i("8C1lk"),c=i("2uPyy");function s(t){if(t.preventDefault(),t.target.classList.contains("js-info")){const e=(0,r.findProduct)(t.target);(0,o.createModal)(e);document.querySelector(".modal").addEventListener("click",(t=>(0,c.choseItem)(t)))}(0,c.choseItem)(t)}})),i.register("l5ICX",(function(e,n){t(e.exports,"createModal",(function(){return s}));var o=i("9B8F0"),r=i("fZsbs"),c=i("2tvHf");function s(t){o.create(`\n   <div class="modal js-card" data-id="${t.id}"> \n    <img src="${t.img}" alt="${t.name}" width="600"/>\n\t<h2>${t.name}</h2>\n\t<h3>${t.price} грн.</h3>\n  <p>${t.description}</p>\n  <div class="modal-button_conteiner">\n  ${(0,c.isActiveLink)()?'<button class=" button js-favorite">Додати до обраного</button>':'<button class=" button js-favorite-delete">Видалити з обраного</button>'}\n  <button class="button js-basket">Додати до кошика</button>\n  </div>\n  </div>\n`,{handler:null,onShow(t){this.handler=r.closeModal.bind(t),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}}).show()}})),i.register("9B8F0",(function(t,e){t.exports=function t(e,n,o){function i(c,s){if(!n[c]){if(!e[c]){var a=void 0;if(!s&&a)return a(c,!0);if(r)return r(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[c]={exports:{}};e[c][0].call(l.exports,(function(t){return i(e[c][1][t]||t)}),l,l.exports,t,e,n,o)}return n[c].exports}for(var r=void 0,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},i=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=r,n.create=function(t,e){var n=function(t,e){var n=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var c=i(r,"IMG"),s=i(r,"VIDEO"),a=i(r,"IFRAME");return!0===c&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===a&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),c=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&c()}));var s={element:function(){return n},visible:function(){return r(n)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(s)}))},close:c};return s}},{}]},{},[1])(1)})),i.register("fZsbs",(function(e,n){function o(t){"Escape"===t.key&&this.close()}t(e.exports,"closeModal",(function(){return o}))})),i.register("2tvHf",(function(e,n){function o(){return document.querySelector("nav").children[0].outerHTML.includes("#")}t(e.exports,"isActiveLink",(function(){return o}))})),i.register("8C1lk",(function(e,n){t(e.exports,"findProduct",(function(){return r}));var o=i("c1Bmg");function r(t){const e=Number(t.closest(".js-card").dataset.id);return o.instruments.find((({id:t})=>t===e))}})),i.register("c1Bmg",(function(e,n){t(e.exports,"instruments",(function(){return o}));const o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg",name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://static.dnipro-m.ua/cache/products/5100/catalog_origin_323616.jpg",name:"Перфоратор",price:3897,description:"Перфоратор бочковий Dnipro-M ВН-10 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://static.dnipro-m.ua/cache/products/9598/catalog_origin_469356.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://static.dnipro-m.ua/cache/products/2021/catalog_origin_323421.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{id:6,img:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_316315.jpg",name:"Тример",price:11049,price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{id:7,img:"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]})),i.register("2uPyy",(function(e,n){t(e.exports,"duplicateBasket",(function(){return a})),t(e.exports,"choseItem",(function(){return u}));var o=i("UDlvM"),r=i("8C1lk"),c=i("jO5Zp"),s=i("lJDt3");let a=JSON.parse(localStorage.getItem(o.common.KEY_DUPLICATE_BASKET))??{};function u(t){const e=JSON.parse(localStorage.getItem(o.common.KEY_FAVORITE))??[],n=JSON.parse(localStorage.getItem(o.common.KEY_BASKET))??[];if(t.target.classList.contains("js-favorite")){const n=(0,r.findProduct)(t.target);if((0,s.findDuplicateItem)(e,n))return;e.push(n),localStorage.setItem(o.common.KEY_FAVORITE,JSON.stringify(e))}if(t.target.classList.contains("js-basket")){const e=(0,r.findProduct)(t.target);if((0,s.findDuplicateItem)(n,e)){return a[e.id]?a[e.id]+=1:a[e.id]=2,console.log(a),void localStorage.setItem(o.common.KEY_DUPLICATE_BASKET,JSON.stringify(a))}n.push(e),localStorage.setItem(o.common.KEY_BASKET,JSON.stringify(n))}if(t.target.classList.contains("js-favorite-delete")){const n=(0,r.findProduct)(t.target);(0,c.deleteItem)(n,e,o.common.KEY_FAVORITE)}if(t.target.classList.contains("js-basket-delete")){const e=(0,r.findProduct)(t.target);(0,c.deleteItem)(e,n,o.common.KEY_BASKET)}}console.log(a)})),i.register("jO5Zp",(function(e,n){function o(t,e,n){let o=e.filter((e=>e.id!==t.id));localStorage.setItem(n,JSON.stringify(o)),location.reload()}t(e.exports,"deleteItem",(function(){return o}))})),i.register("lJDt3",(function(e,n){t(e.exports,"findDuplicateItem",(function(){return o}));const o=(t,e)=>t.some((({id:t})=>t===e.id))}));
//# sourceMappingURL=favorite.f134e489.js.map
