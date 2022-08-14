// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
header.classList.add('navbarDark');
// window.onscroll = function () {
//     const top = window.scrollY;
//     if (top >= 100) {
//         header.classList.add('navbarDark');
//     }
//     else {
//         header.classList.add('navbarDark');
//     }
// }


// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


