const slider = document.querySelector(".slider");
const sliderWrapper = slider.querySelector(".slider__wrapper");
const sliderItems = slider.querySelectorAll(".slider__slide");
const dotsContainer = slider.querySelector(".slider__dots");

let currentIndex = 0;

// Создаем точки для каждого слайда
for (let i = 0; i < sliderItems.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("slider__dot");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll(".slider__dot");

// Устанавливаем класс 'active' для текущей точки
dots[currentIndex].classList.add("active");

// Функция для переключения на следующий слайд
// ДЛЯ БУДУЩИХ ФУНКЦИЙ (ВОЗМОЖНО УДАЛИТСЯ)
function nextSlide() {
  if (currentIndex === sliderItems.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlider();
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  if (currentIndex === 0) {
    currentIndex = sliderItems.length - 1;
  } else {
    currentIndex--;
  }
  updateSlider();
}

// Функция для обновления слайдера при переключении
function updateSlider() {
  // Устанавливаем класс 'active' только для текущей точки
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[currentIndex].classList.add("active");

  // Сдвигаем слайды влево на ширину текущего слайда, умноженную на его индекс
  sliderWrapper.style.transform = `translateX(-${
    currentIndex * sliderItems[0].offsetWidth
  }px)`;
}

// Добавляем обработчики событий на точки
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    updateSlider();
  });
});

// Автоматическое переключение слайдов
setInterval(() => {
  nextSlide();
}, 5000);
