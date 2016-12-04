'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HostBio = function () {
  function HostBio(hostImage) {
    _classCallCheck(this, HostBio);

    this.toggleHostBio = function () {
      var hostBox = this.parentNode;
      var hostBio = hostBox.querySelector('.host-bio');
      hostBio.classList.toggle('hidden');
    };

    this.hostImage = hostImage;
  }

  _createClass(HostBio, [{
    key: 'bindHostBio',
    value: function bindHostBio(hostImage) {
      hostImage.addEventListener('mouseenter', toggleHostBio);
      hostImage.addEventListener('mouseleave', toggleHostBio);
    }
  }]);

  return HostBio;
}();

exports.default = HostBio;