// Common set functions

export class Set {

    private keys = {37: 1, 38: 1, 39: 1, 40: 1};

    Delay = {
        MicroDelay: function (f) {
            setTimeout(f, 200);
        },
        MiniDelay: function (f) {
            setTimeout(f, 400);
        }
    };

    Scroll = {
        disableScroll: function () {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', this.preventDefault, false);
            }
            window.onwheel = this.preventDefault;
            window.onmousewheel = document.onmousewheel = this.preventDefault;
            window.ontouchmove = this.preventDefault;
            document.onkeydown = this.preventDefaultForScrollKeys;
        },
        enableScroll: function () {
            if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            }
            window.onwheel = null;
            window.onmousewheel = document.onmousewheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;

        }
    };

    preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    preventDefaultForScrollKeys(e) {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }

}