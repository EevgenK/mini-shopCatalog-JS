import { creatMarkupMarketing } from './createMarkupMarketing';
import { convertMs } from './convertMs';

function viewMarketing(list) {
  const deadLine = Date.parse('2024-08-01');
  let intervalID = null;
  let saleTime = deadLine - Date.now();

  if (saleTime > 0) {
    let saleTimeID = setTimeout(() => {
      const marketingBox = document.querySelector('.marketing-box');
      if (marketingBox) {
        console.log('good');
      }
      list.insertAdjacentHTML('afterend', creatMarkupMarketing);

      const closeBtn = document.querySelector('.marketing-close-btn');
      const values = document.querySelectorAll('.value');

      let time = 20;
      let closeIntrvalId = setInterval(() => {
        closeBtn.disabled = true;
        closeBtn.textContent = `${(time -= 1)}`;
        if (time <= 0) {
          clearInterval(closeIntrvalId);
          closeBtn.textContent = 'X';
          closeBtn.disabled = false;
        }
      }, 1000);

      intervalID = setInterval(() => {
        saleTime = deadLine - Date.now();
        let dates = convertMs(saleTime);

        for (let i = 0; i < values.length; i++) {
          values[i].textContent = Object.entries(dates)[i][1];
        }
        if (saleTime < 1000) {
          marketingClose();
        }
      }, 1000);

      closeBtn.addEventListener('click', marketingClose);
      function marketingClose() {
        clearInterval(intervalID);
        clearInterval(saleTimeID);
        marketingBox.classList.add('unvisible');
        marketingBox.innerHTML = '';
      }
    }, 5000);
  }
}

export { viewMarketing };
