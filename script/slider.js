// Infinite Slider JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    
    // Enhanced slider with pause on hover
    sliderContainer.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    sliderContainer.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});