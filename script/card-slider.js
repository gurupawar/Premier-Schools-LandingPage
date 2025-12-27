let currentSlide = 0;
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const container = document.querySelector('.card__container');
const totalSlides = cards.length;
let autoSlideInterval;

function updateSlider() {
  if (window.innerWidth <= 767) {
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

function startAutoSlide() {
  if (window.innerWidth <= 767) {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Touch/swipe functionality
let startX = 0;
let isDragging = false;

container.addEventListener('touchstart', (e) => {
  if (window.innerWidth <= 767) {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoSlide();
  }
});

container.addEventListener('touchmove', (e) => {
  if (!isDragging || window.innerWidth > 767) return;
  e.preventDefault();
});

container.addEventListener('touchend', (e) => {
  if (!isDragging || window.innerWidth > 767) return;
  
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  const threshold = 80;
  
  if (Math.abs(diff) > threshold) {
    if (diff > 0 && currentSlide < totalSlides - 1) {
      currentSlide++;
    } else if (diff < 0 && currentSlide > 0) {
      currentSlide--;
    }
    updateSlider();
  }
  
  isDragging = false;
  startAutoSlide();
});

// Dot click handlers
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    goToSlide(index);
    startAutoSlide();
  });
});

// Reset on resize
window.addEventListener('resize', () => {
  stopAutoSlide();
  if (window.innerWidth > 767) {
    container.style.transform = '';
    currentSlide = 0;
  } else {
    updateSlider();
    startAutoSlide();
  }
});

// Initialize
updateSlider();
startAutoSlide();