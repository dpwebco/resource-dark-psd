/**
 * Created by Darrell on 06/04/2017.
 */
(function($) {
    "use strict";
    function preloader(immune, background, color) {
        $('body').prepend('')
    }
    preloader();

    var chartOpts = {
        size: 150,
        scaleLength: 1,
        barColor: "#fff",
        trackColor: false,
        lineWidth: 7,
        scaleColor: false,
        lineCap: "square",
        rotate: 90
    };
    var $chartDraw = $('.chart-draw';

    $chartDraw.easyPieChart(chartOpts);
    $chartDraw.each(function() {
        var s = $(this);
        s.data("easyPieChart").update(0);
    });

    var $learnMoreLink = $('.learn-more a');

    $learnMoreLink.off('click').on('click', function(e) {
        e.preventDefault();
        var heightOf = 0;
        if ($("#header-two").length) {
            heightOf = $(window).height();
        } else if ($('#header-three').length) {
            heightOf = $(window).height - $('#header-three').height();
        } else {
            heightOf = $(window).height() - $('#header').height();
        }

        $('html, body').animate({
            scrollTop: heightOf
        }, 1000);
    });

    function animateResumePage() {
        var $descBox = $(".timeline-count .desc-box"),
            oddBox = $descBox.filter(':odd'),
            evenBox = $descBox.filter(':even');

        $descBox.addClass('ar-desc-box');
        oddBox.addClass('left');
        evenBox.add('right');

        

    }

    animateResumePage();
});