const modalOpenBtns = document.querySelectorAll('[data-modal="true"]');
const modalCloseBtns = document.querySelectorAll('.modal__close-js');
const modal = document.querySelector('.modal-js');

const closeModal = () => {
    modal.querySelectorAll('.modal__form-js').forEach(form => form.reset());
    modal.classList.remove('modal_opened');
    modal.querySelector('[data-id="buy"]').style.display = "none";
    modal.querySelector('[data-id="nikax"]').style.display = "none";
    modal.querySelector('[data-id="viezd"]').style.display = "none";
}

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
};
  
const checkPressOverlay = (e) => {
    if (e.target === modal) {
        closeModal();
    }
    console.log(e.target);
};
  
const openModal = (e) => {
    e.preventDefault();
    if(e.target.dataset.id === 'buy') {
        modal.querySelector('[data-id="buy"]').style.display = "grid"
    }
    if(e.target.dataset.id === 'nikax') {
        modal.querySelector('[data-id="nikax"]').style.display = "grid"
    }
    if(e.target.dataset.id === 'viezd') {
        modal.querySelector('[data-id="viezd"]').style.display = "grid"
    }
    // e.target.dataset.id === 'buy' ? modal.querySelector('[data-id="buy"]').style.display = "block" : modal.querySelector('[data-id="callme"]').style.display = "block";
    modal.classList.add('modal_opened');
}

modalCloseBtns.forEach(btn=>btn.addEventListener('click', closeModal));

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalOpenBtns.forEach(btn => btn.addEventListener('click', openModal));