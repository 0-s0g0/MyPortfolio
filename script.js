document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".product-back");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // 一度表示されたら監視をやめる
            }
        });
    }, { threshold: 0.2 }); // 20%見えたら発火

    targets.forEach(target => observer.observe(target));
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".aboutmeback, .concept-back");

    function fadeInOnScroll() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.9) { // 画面の90%に達したら表示
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // 初回チェック
});
