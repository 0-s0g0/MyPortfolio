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
