'use strict'

var DESKTOP_WIDTH = 940;
var navButton = document.querySelector('.main-nav__button');
var mobileMenuHeader = document.querySelector('.main-nav__menu');
var header = document.querySelector('.header');
var mobileNav = document.querySelectorAll('.main-nav__item');

console.log(header)

var enableHeader = function () {
  if (header.classList.contains('header--opened')) {
      header.classList.remove('header--opened');
  } else if (header.classList.contains('header-secondary--opened')) {
    header.classList.remove('header-secondary--opened');
  }
}

var toggleSecondaryHeader = function () {
  if (header.classList.contains('header-secondary')) {
      header.classList.toggle('header-secondary--opened');
    }
}

if (window.innerWidth < DESKTOP_WIDTH) {

  enableHeader();
  mobileMenuHeader.classList.add('main-nav__menu--closed');

  mobileNav.forEach(function(element) {
    element.classList.add('main-nav__item--hidden');
  });

  navButton.addEventListener('click', function () {
    if (mobileMenuHeader.classList.contains('main-nav__menu--closed')) {
      mobileMenuHeader.classList.remove('main-nav__menu--closed');
      mobileMenuHeader.classList.add('main-nav__menu--opened');

      mobileNav.forEach(function(element) {
        element.classList.remove('main-nav__item--hidden');
      });

      header.classList.add('header--opened');
      toggleSecondaryHeader();
    } else {
      mobileMenuHeader.classList.remove('main-nav__menu--opened');
      mobileMenuHeader.classList.add('main-nav__menu--closed');

      mobileNav.forEach(function(element) {
        element.classList.add('main-nav__item--hidden');
      });

      header.classList.remove('header--opened');
      toggleSecondaryHeader();
    }
  });
}
