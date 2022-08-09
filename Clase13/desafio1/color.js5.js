"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getNum0a255 = function getNum0a255() {
    return Math.floor(Math.random() * 256);
};

var Color = function () {
    function Color() {
        _classCallCheck(this, Color);
    }

    _createClass(Color, [{
        key: "get",
        value: function get() {
            var color = "rgb(" + getNum0a255() + "," + getNum0a255() + "," + getNum0a255() + ")";
            return color;
        }
    }]);

    return Color;
}();

var color = new Color();
console.log(color.get());
