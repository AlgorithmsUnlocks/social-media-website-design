/* Header JS Code */

var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.navbar');
var header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    if(window.scrollY > 0){
        header.classList.toggle('active');
    }else{
        header.classList.remove('active');
    }
}


var dropdown_top_icon = document.querySelector('#dropdown_top_icon');
var dropdown_lists = document.querySelector('#dropdown_lists');

dropdown_top_icon.onclick = () =>{
    dropdown_lists.classList.toggle('active');
}


var dropdown_top_icon_next = document.querySelector('#dropdown_top_icon_next');
var dropdown_lists_next = document.querySelector('#dropdown_lists_next');

dropdown_top_icon_next.onclick = () =>{
    dropdown_lists_next.classList.toggle('active');
}


