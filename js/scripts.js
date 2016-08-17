'use strict';

  function popUp(element) {
    $(element).siblings('.pop-up-container').removeClass('hidden');
  }

  function closePopUp() {
    $('.pop-up-container').addClass('hidden');
  }

  $(document).mouseup(function (e) {
    var container = $('.pop-up-box');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.pop-up-container').addClass('hidden');
    }
  });
