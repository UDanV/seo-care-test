document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            title: "Indian Premier League",
            description: "IPL or the Indian Premier League is the world’s top men’s T20 cricket league. Organized by the BCCI, its first edition was held in 2008. The latest edition of the league (2024) had 10 participating teams. The games are held all over India in different cities. Most of the world’s top cricket players are seen in this exciting league."
        },
        {
            title: "History of IPL",
            description: "The IPL was established in 2008 by the BCCI and quickly became the most popular T20 league in the world. It attracts top international players and generates huge viewership."
        },
        {
            title: "Top Teams",
            description: "Some of the top teams in IPL include Mumbai Indians, Chennai Super Kings, Royal Challengers Bangalore and Kolkata Knight Riders. Fans follow their favorite teams passionately."
        }
    ];

    let currentSlide = 0;

    const titleEl = document.querySelector(".slider__title");
    const descEl = document.querySelector(".slider__description");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    const linesContainer = document.querySelector(".slider__lines");

    slides.forEach((_, index) => {
        const line = document.createElement("div");
        line.classList.add("slider__line");
        if (index === currentSlide) line.classList.add("active");
        linesContainer.appendChild(line);
    });

    const lines = Array.from(document.querySelectorAll(".slider__line"));

    function updateSlide() {
        const slide = slides[currentSlide];
        titleEl.textContent = slide.title;
        descEl.textContent = slide.description;

        lines.forEach((line, index) => {
            line.classList.toggle("active", index === currentSlide);
        });
    }

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    updateSlide(); 
});
