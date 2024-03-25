const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('opaque', window.scrollY > 0);
});