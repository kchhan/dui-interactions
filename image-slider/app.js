// UI selectors
let sliderImages = document.querySelectorAll('.slide'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right'),
  navDots = document.querySelector('#nav-dots'),
  current = 0;

// Clear all Images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
    navDots.children[i].style.backgroundColor = '#ccc';
  }
}

function startSlide() {
  reset();
  sliderImages[current].style.display = 'block';
  navDots.children[current].style.backgroundColor = '#000';
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  navDots.children[current - 1].style.backgroundColor = '#000';
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  navDots.children[current + 1].style.backgroundColor = '#000';
  current++;
}

// Allows navigation through nav dots
navDots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    reset();
    const dotId = e.target.id;
    const dotArr = dotId.split('-');
    const id = parseInt(dotArr[1]);
    sliderImages[id - 1].style.display = 'block';
    navDots.children[id - 1].style.backgroundColor = '#000';
  }
});

arrowLeft.addEventListener('click', function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener('click', function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();