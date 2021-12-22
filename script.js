'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelector('.show-modal');

//Open Modal
showModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  showModal.classList.add('hidden');
});

//Close action
const closeAction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  showModal.classList.remove('hidden');
};
//Close Modal with button
closeModal.addEventListener('click', closeAction);

//Close Modal with overlay
overlay.addEventListener('click', closeAction);

//Close Modal with ESC key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeAction();
    }
  }
});
