const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
});
