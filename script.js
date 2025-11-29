// Переход на главную страницу при нажатии на лого
const btnLogo = document.querySelector('.header_logo')

btnLogo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// // Кнопка "Выбрать выпечку"
// const btnHero = document.querySelector('.button_hero')

// btnHero.addEventListener('click', () => {
//     window.location.href = 'menu.html';
// });

// Бургер
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile_menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Счетчик позиций в карточке
const cardsCounter = document.querySelectorAll('.menu_card');

cardsCounter.forEach(card => {
    let count = 0;
    const plus = card.querySelector('.menu_plus');
    const minus = card.querySelector('.menu_minus');
    const num = card.querySelector('.menu_number');

    plus.addEventListener('click', (e) => {
        e.stopPropagation();    
        count++;
        num.innerHTML = count;
    });

    minus.addEventListener('click', (e) => {
        e.stopPropagation();
        if (count > 0) count--;
        num.innerHTML = count;
    });
});



// Клик на карточку и открытие модального окна с описанием товара
const modalProduct = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');
const cardProducts = document.querySelectorAll('.menu_card');


function openModal() {
    if (!modalProduct) return;
    modalProduct.classList.add('active');
    modalProduct.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modalProduct) return;
    modalProduct.classList.remove('active');
    modalProduct.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

cardProducts.forEach(card => {
    card.addEventListener('click', (e) => {

        if (
            e.target.closest('.menu_plus') ||
            e.target.closest('.menu_minus') ||
            e.target.closest('.menu_cart') ||
            e.target.closest('.menu_count')
        ) {
            return;
        }

        openModal();
    });
});

// Закрытие модального окна

if (btnClose) {
    btnClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });
}


// Смена кнопок 100 гр или Весь продукт

const btnModal = document.getElementById('modal__btn')
const btnModalAll = document.getElementById('modal__btn_all')

btnModal.addEventListener('click', () => {
    btnModal.classList.add('active')
    btnModalAll.classList.remove('active')
})

btnModalAll.addEventListener('click', () => {
    btnModal.classList.remove('active')
    btnModalAll.classList.add('active')
})