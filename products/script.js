document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = "none";
            slide.style.transform = "scale(1)";
            slide.style.opacity = "0.5";
        });
        
        // 中央のスライドを大きく表示
        slides[currentIndex].style.display = "block";
        slides[currentIndex].style.transform = "scale(1)";
        slides[currentIndex].style.opacity = "1";
        

        // インジケーターの更新
        indicators.forEach((indicator, index) => {
            indicator.classList.remove("active");
            if (index === currentIndex) {
                indicator.classList.add("active");
            }
        });
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);

    updateSlides();
});
