const button = document.querySelector('.menu-icon');
const links = document.querySelector('.links')

button.onclick = function(){
    links.classList.toggle('show-links')
    button.classList.toggle('rotate')
}