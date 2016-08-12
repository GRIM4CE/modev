'use strict';

  function popUp(element) {
    $(element).siblings('.pop-up-container').removeClass('hidden');
  }

  function closePopUp() {
    $('.pop-up-container').addClass('hidden');
  }
