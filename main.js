let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 100, origin: 'top'})
sr.reveal('.home',{delay: 100, origin: 'top'})

sr.reveal('.form-container form',{delay: 500, origin: 'left'})
sr.reveal('.heading',{delay: 500, origin: 'top'})

sr.reveal('.ride-container .box',{delay: 300, origin: 'top'})

sr.reveal('.services-container .box',{delay: 300, origin: 'top'})
sr.reveal('.services',{delay: 300, origin: 'top'})

sr.reveal('.about-container .box',{delay: 300, origin: 'top'})
sr.reveal('.about-img',{delay: 300, origin: 'top'})
sr.reveal('.about-text',{delay: 300, origin: 'top'})

sr.reveal('.reviews-contianer .box',{delay: 300, origin: 'top'})

sr.reveal('.newsletter .box',{delay: 300, origin: 'bottom'})