'use strict';

function popUp() {
  $(document).find('.pop-up-container').removeClass('hidden');
  $(document).find('body').css('overflow', 'hidden');
}

function closePopUp() {
  $('.pop-up-container').addClass('hidden');
  $(document).find('body').css('overflow', 'auto');
}

$(document).mouseup(function (e) {
  var container = $('.pop-up-box');
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.pop-up-container').addClass('hidden');
    $(document).find('body').css('overflow', 'auto');
  }
});

function readMore(readmore) {
  $(readmore).next('.api-readmore-container').toggle();
}

$(document).ready(function($){
 $('.persona-image').hover(function(){
   $(this).parents('.persona-group').find('.persona-description').fadeIn(300);
  });

  $('.persona-image').mouseout(function(){
    $(this).parents('.persona-group').find('.persona-description').fadeOut(300);
  });
});
