const modalSet = () => {
const modalButton = document.querySelector('.submit-button');
const modalWindow = document.querySelector('.modal');

modalWindow.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms easy-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalWindow || target.closest('.modal-main__close') || target.closest('.modal-main__btn-close')) {
    
    modalWindow.style.opacity = '0';

    setTimeout(() => {
        modalWindow.style.visibility = 'hidden';
    }, 300)
    }
}


const startModal = () => {
    modalWindow.style.visibility = 'visible';
    modalWindow.style.opacity = '1';
    event.preventDefault();
};

modalWindow.addEventListener('click', startModal);

modalWindow.addEventListener('click', closeModal);
}

modalSet();

export { modalSet }