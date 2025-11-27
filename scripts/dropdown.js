document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".reasons__dropdown");

    dropdowns.forEach(dropdown => {
        const title = dropdown.querySelector(".reasons__dropdown--title");

        title.addEventListener("click", () => {
            dropdown.classList.toggle("active"); // переключение открыто/закрыто
        });
    });
});
