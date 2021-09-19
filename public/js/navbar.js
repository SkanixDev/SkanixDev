var hamburger = document.querySelector('header .hamburger');
var navbarUL = document.querySelector('header ul');

hamburger.addEventListener('click', function(e) {
    hamburger.classList.toggle('active');
    navbarUL.classList.toggle('active');
    console.log('hamburger clicked')
})