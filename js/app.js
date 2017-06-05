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
    var $chartDraw = $('.chart-draw');

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

        $descBox.waypoint({
            handler: function() {
                var $s = $(this);
                if ($s.hasClass('left')) {
                    $s.removeClass('left');
                } else {
                    $s.removeClass('right');
                }
            },

            triggerOnce: true,
            offset: '100%'
        });
    }

    animateResumePage();

    $('.filter-port figure .prettyPhoto').magnificPopup({
        type: "image",
        image: {
            titleSrc: function(item) {
                return item.el.parents('figure').find('h6').html();
            },
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },

        key: 'image-key',
        verticalFit: true,
        mainClass: 'image-popup-style',
        tError: '<a href="%url%">the image</a> could not be loaded',

        gallery: {
            enabled: true,
            tCounter: '',
        },
        callbacks: {
            open: function() {
                this.content.addClass('fadeInLeft');
            },
            close: function() {
                this.content.removeClass('fadeInLeft');
            }
        }
    });

    /** isotope filters **/
    function isotopeInit() {
        var $container = $('.filter-port'),
            $filter = $('.filter-menu');

        $(window).on('load resize', function () {
            $container.isotope({
                itemSelector: ".item",
                animationEngine: "best-available",
                transformsEnabled: true,
                resizeContainer: true,
                easing: 'linear',
                layoutMode: "masonry"
            });

            $filter.find("a").on('click touchstart', function(e) {
                var $t = $(this),
                    selector = $t.data('filter');

                if ($t.hasClass('filter-current'))
                    return false;

                $filter.find('a').removeClass('filter-current');
                $t.addClass('filter-current');

                $container.isotope({filter: selector});

                e.stopPropagation();
                e.preventDefault();
            });
        });

    }

    /** form validation **/
    function formValidation() {
        var $form = $('#contact-form');

        $form.validate({
            rules: {
                "name": {
                    required: true,
                    minLength: 2,
                },
                "email": "required",
                "message": {
                    required: true,
                    minLength: 5
                }
            },
            errorClass: 'invalid-error',
            errorElem: 'span'
        });

        $('.wpcf7-form i').click(function() {
            $('#contact-form').submit();
        })
    }

    formValidation();

    isotopeInit();

    var Resource = {
        init: function() { this.mainNavInit(); this.cacheDom(); },

        cacheDom: function() {
            this.$mainNav = $('.main-nav');
            this.$aboutSect = $('.inner-nav a').eq(1);
            this.$navControl = $('.nav-control a, .nav-control');
            this.$innerNav = $('.inner-nav');
        },


        // todo: refactor this confusing piece of code :)
        // mainNavInit: function() {
        //     this.$navControl.on('click', function(e) {
        //         if (e.target.parentNode === this) {
        //             if ($(this).parent().hasClass('nav-control')) {
        //                 $(this).parent().find(this.$innerNav).toggleClass('show-nav');
        //             }else {
        //                 this.$mainNav.find(this.$innerNav).toggleClass(('showNav'));
        //
        //                 if (this.$mainNav.find(this.$innerNav).hasClass('active')) {
        //
        //                 }
        //             }
        //         }
        //     })
        // }

    };

    Resource.init();

    if ($.flexslider) {
        $('.port-formats-container .flexslider').flexslider({
            animation: "slide",
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            controlNav: false
        });
    }
})(jQuery);

$(document).ready(function($) {
    $('.inner-nav > li > a > span').hover(function() {
        var z = 100;
        $(this).parent().parent().children('ul').css("right", "" + z + "%");
        $(this).parent().parent().children("ul").css('width', '' + ($(this).width() + 42) + 'px');

    }, function() {});

    $('.inner-nav > li').hover(function() {}, function() {
        $(this).children('ul').css('right', '-500%');
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('.return-to-top').fadeIn(200);
    } else {
        $('.return-to-top').fadeOut(200);
    }
});
