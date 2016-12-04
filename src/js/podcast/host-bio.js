class HostBio {
  constructor(hostImage) {
    this.hostImage = hostImage
  }
  bindHostBio(hostImage) {
    hostImage.addEventListener('mouseenter', toggleHostBio);
    hostImage.addEventListener('mouseleave', toggleHostBio);
  }

  toggleHostBio = function() {
    let hostBox = this.parentNode;
    let hostBio = hostBox.querySelector('.host-bio');
    hostBio.classList.toggle('hidden');
  }
}
export default HostBio;
