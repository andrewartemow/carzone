'use strict';

const form = document.querySelector('#telegramsend');

async function sendMessage(form) {
  const formData = new FormData(form);
  if (formData) {
    const url = 'telegramsend.php';
    const responce = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const messageStatus = document.querySelector('.message-status');
    const messageStatusText = document.querySelector('.message-status-text');
    if (responce.ok) {
      form.reset();
      messageStatusText.textContent = 'Mesajul dvs. a fost trimis.';
      messageStatus.classList.add('show');
      setTimeout(() => {messageStatus.classList.remove('show')}, 2000);
    } else {
      messageStatusText.textContent = 'A apărut o eroare. Vă rugăm să ne contactați telefonic.';
      messageStatus.classList.add('show');
      setTimeout(() => {messageStatus.classList.remove('show')}, 2000);
    }
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  sendMessage(form);
});



