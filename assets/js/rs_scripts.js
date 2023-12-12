var tpj = jQuery;

var revapi1;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
    init: function () {
        window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
        if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {
            window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
            if (window.revapi1initTry < 20)
                requestAnimationFrame(function () {
                    RS_MODULES.modules["revslider11"].init();
                });
            return;
        }
        window.revapi1 = jQuery(window.revapi1);
        if (window.revapi1.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_1");
            return;
        }
        revapi1.revolutionInit({
            revapi: "revapi1",
            sliderLayout: "fullscreen",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1170,900,767,480",
            gridheight: "868,768,960,668",
            minHeight: "568px",
            lazyType: "smart",
            perspectiveType: "local",
            editorheight: "868,768,960,668",
            responsiveLevels: "1240,1024,778,480",
            fullScreenOffset: "60px",
            progressBar: { disableProgressBar: true },
            navigation: {
                mouseScrollNavigation: false,
                onHoverStop: false,
                touch: {
                    touchenabled: true,
                },
                arrows: {
                    enable: true,
                    style: "tacticool",
                    hide_onmobile: true,
                    hide_under: 480,
                    left: {
                        h_offset: 0,
                    },
                    right: {
                        h_offset: 0,
                    },
                },
            },
            parallax: {
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                disable_onmobile: true,
            },
            fanim: {
                in: { o: 0 },
                out: { a: false },
                speed: 1500,
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%",
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true,
            },
        });
    },
}; // End of RevInitScript

if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
}