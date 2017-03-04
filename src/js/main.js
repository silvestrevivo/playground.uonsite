$(document).ready(function(){
  $('.banner').fadeIn(1500, function(){
    $('.title-banner').find('li').first().fadeTo('fast', 1 ,  function showNext() {
    $(this).next('li').fadeTo('fast', 1,  showNext );
    });
  });
});
