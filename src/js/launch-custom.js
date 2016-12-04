'use strict';

let speakerContainers = document.querySelectorAll('.speaker-container');
let readMoreButtons = document.querySelectorAll(".read-more-button");

var toggleState = function (elem, one, two) {
  elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

function toggleSpeakerBio() {
  let speakerConatiner = this.parentNode;
  let speakerBio = speakerConatiner.querySelector('.speaker-description');
  toggleState(speakerBio, 'hidden', 'visible');
}

function bindSpeakerImages(speakerConatiner) {
  let speakerImage = speakerConatiner.querySelector('.speaker-image');
  let speakerBio = speakerConatiner.querySelector('.speaker-description');
  speakerImage.addEventListener('mouseenter', toggleSpeakerBio);
  speakerBio.addEventListener('mouseenter', toggleSpeakerBio);
  speakerImage.addEventListener('mouseleave', toggleSpeakerBio);
  speakerBio.addEventListener('mouseleave', toggleSpeakerBio);
}

function toggleReadMore() {
  let readMoreButton = this;
  let panel = readMoreButton.parentNode;
  let readMoreText = panel.querySelector('.read-more-text')

  if (readMoreText.classList.contains('closed')) {
    readMoreText.className = 'read-more-text open';
    readMoreButton.innerText = 'Read Less';
  } else {
    readMoreText.className = 'read-more-text closed';
    readMoreButton.innerText = 'Read More';
  }
}

function bindReadMoreButton(readMoreButton) {
  readMoreButton.addEventListener('click', toggleReadMore)
}

// Wire Read More button
for (let i = 0; i < readMoreButtons.length; i++){
  bindReadMoreButton(readMoreButtons[i]);
}

for (let i = 0; i < speakerContainers.length; i++){
  if (speakerContainers[i].querySelector('.speaker-description') !== null) {
    bindSpeakerImages(speakerContainers[i]);
  }
}
