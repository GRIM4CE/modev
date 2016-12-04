'use strict';

/* Host Bio Setup */
var hostImages = document.querySeΩlectorAll('.host-image');

// Bind Host
var bindHostBio = function bindHostBio(hostImage) {
  hostImage.addEventListener('mouseenter', toggleHostBio);
  hostImage.addEventListener('mouseleave', toggleHostBio);
};

// Display Host Biography
var toggleHostBio = function toggleHostBio() {
  var hostBox = this.parentNode;
  var hostBio = hostBox.querySelector('.host-bio');
  hostBio.classList.toggle('hidden');
};

// wiring for binding of each host-bio
for (var i = 0; i < hostImages.length; i++) {
  bindHostBio(hostImages[i]);
}