const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li');
    const fix = document.querySelector('body');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        fix.classList.toggle('fix-body');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.1}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('rotate');
    });

}

const app = ()=>{
    navSlide();
}

app();