'use strict';
$(document).ready(function() {
  // открыть / закрыть мобильное меню
  $('.js-mobile-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.js-mobile-menu').toggleClass('active');
  });
});
