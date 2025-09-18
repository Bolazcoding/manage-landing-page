const slider = document.querySelectorAll('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const form = document.querySelector('.form');
const invalid = document.querySelector('.invalid');
const submit = document.querySelector('.footer-submit');

// Slider Function
const goToSlide = function (slide) {
  slider.forEach(
    (slides, i) =>
      (slides.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
let curSlide = 0;
const maxSlide = slider.length;

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Email Validation
const validateEmail = function (e) {
  e.preventDefault();
  const emailInput = document.querySelector('.footer-email').value;

  if (!emailInput) {
    invalid.style.display = 'block';

    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput)) {
    invalid.style.display = 'block';
  } else {
    invalid.style.display = 'none';
  }
};

form.addEventListener('submit', validateEmail);
