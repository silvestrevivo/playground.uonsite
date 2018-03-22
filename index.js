import './assets/sass/style.scss';
import $ from 'jquery';

$(document).ready(function () {
  $('.title-banner').find('li').first().fadeTo('fast', 1, function showNext() {
    $(this).next('li').fadeTo('fast', 1, showNext);
  });
});
