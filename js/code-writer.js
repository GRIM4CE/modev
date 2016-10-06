'use strict';

$(document).ready(function () {
  $('.quote-image').hover(function () {
    $(this).parents('.speaker-container').find('.hover-quote').fadeIn(300);
  });

  $('.quote-image').mouseout(function () {
    $(this).parents('.speaker-container').find('.hover-quote').fadeOut(300);
  });

  $('.read-more-button').click(function () {
    var button = this;
    var parent = button.parentNode;
    var text = $(parent).children('.read-more-text');

    if (!text.is(":visible")) {
      text.css("display", "block");
      button.innerHTML = "";
      button.innerHTML = "Read Less";
    } else {
      text.css("display", "none");
      button.innerHTML = "";
      button.innerHTML = "Read More";
    }
  });
});