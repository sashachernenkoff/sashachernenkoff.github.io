(function () {
  var hamburger = document.querySelector('.hamburger');
  var drawer = document.querySelector('.mobile-drawer');
  var overlay = document.querySelector('.mobile-overlay');

  var yearEls = document.querySelectorAll('.footer-year, #date_');
  var year = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = year; });

  if (!hamburger || !drawer || !overlay) return;

  function open() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
  }

  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
  }

  hamburger.addEventListener('click', function () {
    drawer.classList.contains('open') ? close() : open();
  });

  overlay.addEventListener('click', close);
})();
