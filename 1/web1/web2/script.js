// Переключение мобильного меню
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.menu');

mobileMenuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Отправка формы
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://formcarry.com/s/YOUR_FORMCARRY_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Ваше сообщение отправлено!');
      form.reset();
    } else {
      alert('Ошибка отправки сообщения.');
    }
  } catch (error) {
    alert('Ошибка отправки сообщения.');
  }
});

// Переключение активности для вопросов FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('h3');
  const answer = item.querySelector('p');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


// Слайдер отзывов
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.review-slide');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
const dots = document.querySelectorAll('.pagination-dot');

let currentIndex = 0;

// Функция для обновления слайдов
function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Обновление активной точки пагинации
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Переключение на следующий слайд
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

// Переключение на предыдущий слайд
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

// Переключение по точкам
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

// Установка начального состояния
updateSlider();

