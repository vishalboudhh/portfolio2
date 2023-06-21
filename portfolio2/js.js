// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top<offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*= '+ id +']').classList.add('active');
            });
        };
    });


    // static navbar
    let header = document.querySelectorAll('header');
    header.classList.toggle('static',window.scrollY > 100);
};


// scroll reveal
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay:200 
});

ScrollReveal().reveal('.home-content , .heading', { original:'top' });
ScrollReveal().reveal('.home-img , .services-container,.portfolio-box , .contact form', { original:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { original:'left' });
ScrollReveal().reveal('.home-content p , .about-contant', { original:'right' });
