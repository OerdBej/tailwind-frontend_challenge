const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', navToggle);

// toggle the open class
function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}
