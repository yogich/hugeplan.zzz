
(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        factory(exports);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], factory);
    } else {
        // Browser globals
        factory(root);
    }
} (this, function(exports) {
    exports.Delay = (function () {

        'use strict';
        var Delay;

        Delay = function () {

            this.MicroDelay = function (f) {
                setTimeout(f, 200);
            };
            this.MiniDelay = function (f) {
                setTimeout(f, 400);
            };

        };

        return Delay;
    })();
    return exports.Delay;
}));
