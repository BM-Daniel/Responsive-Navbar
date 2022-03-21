const slidingNav = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `fadingNavLink 0.5s ease forwards ${index / 5 + 0.1}s`
            }
        })

        menu.classList.toggle('toggle');
    })
}

slidingNav();