const menu = document.querySelector('.menu');
const menuLink = document.querySelector('.menu-icon');
const panel = document.querySelector('.center');
const searchBar = document.querySelector('.search-bar');
const notificationsHeader = document.querySelector('.header')

// toggles side menu icon
function menuIcon () {
  if (panel.style.left === '50px') {
    panel.style.left = '200px';
    menu.style.left = '25px';
  } else {
    panel.style.left = '50px';
    menu.style.left = '50px';
  }
}

// toggles search bar
function search () {
  if (searchBar.style.display === 'none') {
    searchBar.style.display = 'block';
    menuLink.style.display = 'none';
    menuLink.style.animation = 'slide-in .4s ease-in-out';
    notificationsHeader.style.display = 'none';
    notificationsHeader.style.animation = 'slide-in .4s ease-in-out';

  } else {
    searchBar.style.display = 'none';
    menuLink.style.display = 'block';
    notificationsHeader.style.display = 'block';
    searchBar.style.animation = 'slide-in .4s ease-in-out';
  }
}
