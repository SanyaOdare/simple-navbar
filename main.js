// classList - show/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  console.log(links.classList);
})