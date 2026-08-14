(function () {
  var hamburger = document.querySelector('.hamburger');
  var drawer = document.querySelector('.mobile-drawer');
  var overlay = document.querySelector('.mobile-overlay');

  // set current year in drawer footer and main footer
  var yearEls = document.querySelectorAll('.footer-year, #date_');
  var year = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = year; });

  if (!hamburger || !drawer || !overlay) return;

  hamburger.addEventListener('click', function () {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.addEventListener('click', function () {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  });
})();
