'use strict';

  function popUp(element) {
    $(element).parent().next('.pop-up-container').removeClass('hidden');
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
