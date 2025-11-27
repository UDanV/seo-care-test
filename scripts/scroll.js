document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".live");

    sections.forEach(section => {
        const wrapper = section.querySelector(".live__cards-wrapper");
        const nextBtn = section.querySelector(".live-next");
        const prevBtn = section.querySelector(".live-prev");
        const scrollAmount = 500;

        if (wrapper && nextBtn && prevBtn) {
            nextBtn.addEventListener("click", () => {
                wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            prevBtn.addEventListener("click", () => {
                wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    });
});
