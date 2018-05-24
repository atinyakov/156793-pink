"use strict"


var nav = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__button');
var mobileMenu = document.querySelector('.main-nav__sub-menu');

nav.classList.remove('main-nav--opened');
nav.classList.add('main-nav--closed');

navButton.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
    mobileMenu.classList.remove('main-nav__sub-menu--hidden');
  } else {
    nav.classList.add('main-nav--closed');
    nav.classList.remove('main-nav--opened');
    mobileMenu.classList.add('main-nav__sub-menu--hidden');
  }
});
