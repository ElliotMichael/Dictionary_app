document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");

    toggleButton.addEventListener("click", function () {
        toggleButton.classList.toggle("active");
        // You can add additional logic here to switch other elements to dark mode
    });
});