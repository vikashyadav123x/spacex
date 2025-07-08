const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}


function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 50);
            }
            else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}
const centerText = document.querySelector('.section-inner-center');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        centerText.classList.add('hide');
    } else {
        centerText.classList.remove('hide');
    }
});



function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}
