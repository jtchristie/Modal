var modalButton = document.querySelector('.modalButton');
var closeModal = document.querySelector('.close-modal');
var modal = document.querySelector('.modal');
var modalcontent = document.querySelector('.modal-content');
var modalbg = document.querySelector('.modalbg');

function toggleClassOnClick(elementNodeToBeClicked, elementNodeToHaveClassAdded, className) {
    if (true) {
        elementNodeToBeClicked.addEventListener('click', function () {
            console.log(this);
            elementNodeToHaveClassAdded.classList.toggle(className);
        });
    }
    else { }
}

toggleClassOnClick(modalButton, modal, 'show-modal');
toggleClassOnClick(closeModal, modal, 'show-modal');
toggleClassOnClick(modalbg, modal, 'show-modal');

