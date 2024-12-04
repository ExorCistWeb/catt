// Все блоки для слайдера
const slides = document.querySelectorAll('.about_text, .about_us');
const prevButton = document.querySelector('.end_btn'); // Кнопка "Назад"
const nextButton = document.querySelector('.next_btn'); // Кнопка "Вперед"

let currentIndex = 0; // Индекс текущего блока

// Функция для обновления активного блока
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });

    // Обновление текста кнопок
    if (currentIndex > 0) {
        prevButton.innerHTML = `<img src="./img/icon/end.svg" alt=""> ${slides[currentIndex - 1].id}`;
    } else {
        prevButton.innerHTML = `<img src="./img/icon/end.svg" alt=""> About us`; // Если на первом блоке
    }

    if (currentIndex < slides.length - 1) {
        nextButton.innerHTML = `${slides[currentIndex + 1].id} <img src="./img/icon/next.svg" alt="">`;
    } else {
        nextButton.innerHTML = `Repeat <img src="./img/icon/next.svg" alt="">`; // Если последний блок
    }
}

// Обработчики кнопок
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlides();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Зацикливание на первый блок
    }
    updateSlides();
});

// Инициализация слайдера
updateSlides();


// Получаем элемент header
const header = document.querySelector('header');

let lastScroll = 0; // Последняя позиция прокрутки

// Отслеживаем прокрутку страницы
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // Текущая позиция прокрутки

    // Если пользователь прокручивает вверх, показываем шапку
    if (currentScroll < lastScroll) {
        header.classList.remove('hidden');
    }
    // Если пользователь прокручивает вниз, скрываем шапку
    else {
        header.classList.add('hidden');
    }

    // Обновляем последнюю позицию прокрутки
    lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinksBurgerMenu = document.querySelector(".navLinksBurgerMenu");
  
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      navLinksBurgerMenu.classList.toggle("active");
    });
  });
  