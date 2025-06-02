window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 90) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});