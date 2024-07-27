import { convertMs } from './convertMs';
function viewMarketing() {
  const marketBox = document.querySelector('.marketing-box');
  const closeBtn = document.querySelector('.marketing-close-btn');
  const values = document.querySelectorAll('.value');

  const deadLine = Date.parse('2024-07-28');
  const dateNow2 = Date.now();
  let { days, hours, minutes, seconds } = convertMs(deadLine - dateNow2);

  setTimeout(() => {
    marketBox.style.display = 'flex';
    values[0].textContent = addLeadingZero(days);
    values[1].textContent = addLeadingZero(hours - 3);
    values[2].textContent = addLeadingZero(minutes);
    values[3].textContent = addLeadingZero(seconds);
    const intervalID = setInterval(() => {
      if (values[3].textContent <= 0) {
        values[2].textContent = addLeadingZero((values[2].textContent -= 1));
        values[3].textContent = 60;
      } else if (values[2].textContent < 0) {
        values[1].textContent = addLeadingZero((values[1].textContent -= 1));
        values[2].textContent = 60;
      } else if (values[1].textContent < 0) {
        values[0].textContent = addLeadingZero((values[0].textContent -= 1));
        values[2].textContent = 24;
      } else if (values[0].textContent < 0) {
        values[0].textContent = addLeadingZero(0);
      }
      if (
        !values[0].textContent &&
        !values[1].textContent &&
        !values[2].textContent &&
        !values[3].textContent
      ) {
        marketingClose();
      }
      values[3].textContent = addLeadingZero((values[3].textContent -= 1));
      closeBtn.addEventListener('click', () => {
        marketingClose();
      });
      function marketingClose() {
        clearInterval(intervalID);
        marketBox.style.display = 'none';
      }
    }, 1000);
  }, 5000);
}

function addLeadingZero(v) {
  return String(v).padStart(2, '0');
}
export { viewMarketing };
