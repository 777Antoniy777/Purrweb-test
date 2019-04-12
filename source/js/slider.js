'use strict';
(function () {
  var list = document.querySelector('.offers-slider__list');
  var items = list.querySelectorAll('.offers-slider__item');
  var buttons = document.querySelectorAll('.offers__buttons label');
  var distance = 100 / items.length;

  // функция показа нужного слайда
  var buttonClickHandler = function (button, index) {
    button.addEventListener('click', function () {
      list.style.transform = 'translateX(' + -distance * index + '%)';
    });
  };

  for (var i = 0; i < items.length; i++) {
    buttonClickHandler(buttons[i], i);
  }
})();
