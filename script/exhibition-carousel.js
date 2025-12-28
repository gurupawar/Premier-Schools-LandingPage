document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const cards = document.querySelectorAll('.exhibition__cards-card');
  const totalSlides = cards.length;
  const cardsContainer = document.querySelector('.exhibition__cards');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function updateCarousel() {
    const translateX = -currentSlide * 100;
    cardsContainer.style.transform = `translateX(${translateX}%)`;
    
    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    updateCarousel(); // Initial state
  }
});