'use strict';

var speakerContainers = document.querySelectorAll('.speaker-container');
var readMoreButtons = document.querySelectorAll(".read-more-button");

var toggleState = function toggleState(elem, one, two) {
  elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

function toggleSpeakerBio() {
  var speakerConatiner = this.parentNode;
  var speakerBio = speakerConatiner.querySelector('.speaker-description');
  toggleState(speakerBio, 'hidden', 'visible');
}

function bindSpeakerImages(speakerConatiner) {
  var speakerImage = speakerConatiner.querySelector('.speaker-image');
  var speakerBio = speakerConatiner.querySelector('.speaker-description');
  speakerImage.addEventListener('mouseenter', toggleSpeakerBio);
  speakerBio.addEventListener('mouseenter', toggleSpeakerBio);
  speakerImage.addEventListener('mouseleave', toggleSpeakerBio);
  speakerBio.addEventListener('mouseleave', toggleSpeakerBio);
}

function toggleReadMore() {
  var readMoreButton = this;
  var panel = readMoreButton.parentNode;
  var readMoreText = panel.querySelector('.read-more-text');

  if (readMoreText.classList.contains('closed')) {
    readMoreText.className = 'read-more-text open';
    readMoreButton.innerText = 'Read Less';
  } else {
    readMoreText.className = 'read-more-text closed';
    readMoreButton.innerText = 'Read More';
  }
}

function bindReadMoreButton(readMoreButton) {
  readMoreButton.addEventListener('click', toggleReadMore);
}

// Wire Read More button
for (var i = 0; i < readMoreButtons.length; i++) {
  bindReadMoreButton(readMoreButtons[i]);
}

for (var _i = 0; _i < speakerContainers.length; _i++) {
  if (speakerContainers[_i].querySelector('.speaker-description') !== null) {
    bindSpeakerImages(speakerContainers[_i]);
  }
}