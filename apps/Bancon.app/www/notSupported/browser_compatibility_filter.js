/* eslint-disable */

// Microsoft Edge: 18,
// Safari: 11,
// Safari Mobile: 11,
// Chrome: 69,
// Chrome Mobile: 69,
// Firefox: 62,
// Firefox Mobile: 62,

// IE8 doesn't support document.addEventListener
if (document.addEventListener && window.getComputedStyle) {
    var supported = {
        apple: function apple() {
            // Safari 12+ && iOS12+
            return "apple:safari";
        },
        moz: function moz() {
            var isFF = typeof InstallTrigger !== "undefined";
            return isFF && !!CSS.supports && CSS.supports("font-variation-settings: normal") && "moz:firefox";
        },
        webkit: function webkit() {
            return (
                [
                    // Safari && Safari iOS 11+
                    isSafari() && performance && performance.mark !== undefined && "webkit:safari",
                    // Chrome 69+
                    !!window.chrome && isChromish() && "webkit:chrome",
                    // Chrome-like 69+ or Edge 18+
                    (isChromish() || (Promise && Promise.prototype.finally)) && "webkit",
                ].reduce(function reducer(prev, curr) {
                    return prev ? prev : curr;
                }, false)
            );
            function isChromish() {
                return CSS && CSS.supports("scroll-snap-type:none");
            }

            function isSafari() {
                if (/constructor/i.test(window.HTMLElement)) return true;
                return (function(o) {
                    return o.toString() === "[object SafariRemoteNotification]";
                })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));
            }
        },
    };

    document.addEventListener("DOMContentLoaded", function DOMContentLoaded(ev) {
        var prefix = Array.prototype.slice
            .call(window.getComputedStyle(document.documentElement, ""))
            .filter(function filter(prop) {
                return prop.indexOf("-") === 0;
            })
            .slice(0, 1)
            .join("")
            .match(/^-([^-]+)/)
            .slice(1)
            .join("");
        validate(supported[prefix]);
    });
} else {
    validate(false);
}

function validate(check) {
    if (typeof check === "function") {
        var browser = check();
        if (browser) {
            window.BROWSER_ENGINE = browser;
            return true;
        }
    }
    location.href = window.innerWidth >= 768 ? "notSupported/NSDesktop.html" : "notSupported/NSMobile.html";
}
