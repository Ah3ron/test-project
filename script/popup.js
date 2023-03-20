const btn = document.querySelector('.social-button');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup-overlay');

btn.addEventListener('click', function() {
    popupOverlay.classList.toggle('active');
});

document.body.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && !btn.contains(e.target)) {
        popupOverlay.classList.remove("active");
    }
});