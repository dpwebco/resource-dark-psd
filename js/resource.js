var resource = {
    options: {
        scrollToTopAnimSpeed: 500
    },
    init: function () {
        this.cacheDom();
        this.handleEvents();
        this.initFlexslider();
        this.configMagnificPopup();
    },
    cacheDom: function() {
        this.$form = $('.form');
        this.$submitBtn = $('.form > .submit-btn');
        this.flexsliderContainer = $('.portfolio-formats-container > .flexslider');
        this.$descBox = $('.timeline-container .desc-box');
        this.$oddBox = this.$descBox.filter(':odd');
        this.$evenBox = this.$descBox.filter(':even');
        this.$prettyPhoto = $('.portfolio-filters figure .prettyPhoto');
        this.$prettyVideo = $('.portfolio-filters figure .prettyVideo');
        this.$backToTop = $('#back-to-top');
        this.$closeFooter = $('footer i');
        this.$footerContact = $('.footer-contact');
        this.$footerContactContent = $('.footer-contact .footer-content');
        this.$googleMapCaptionMap = $('.google-map > .contentMap');
        this.$activeFooter = $('.footer-active');
    },

    validateForm: function() {
        this.$form.validate({
            rules: {
                "name": {
                    required: true,
                    minLength: 2
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
    },

    handleEvents: function () {
        this.$submitBtn.on('click', this.validateForm);
        this.$backToTop.on('click', this.backToTop);
        this.$closeFooter.on('click', this.closeFooter);
    },

    initFlexslider: function () {
        if ($.flexslider()) {
            this.flexsliderContainer.flex({
                animation: "slide",
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
                controlNav: false
            })
        }
    },

    animateResumePage: function () {
        this.$descBox.addClass('ar-desc-box');
        this.$oddBox.addClass('ar-left');
        this.$evenBox.addClass('ar-right');

        this.$descBox.waypoint({
            handle: function() {
                var $s = $(this);
                if ($s.hasClass('ar-left')) {
                    $s.removeClass('ar-left');
                } else {
                    $s.removeClass('ar-right');
                }
            },
            triggerOnce: true,
            offset: "100%"
        });
    },

    test: function () {
        this.animateResumePage();
    },

    configMagnificPopup: function () {
        this.$prettyPhoto.magnificPopup({
            type: "image",
            image: {
                titleSrc: function(item) {
                    return item.el.parents('figure').find('h6').html();
                },
                tError: '<a href="%url%">Teh image #%curr% </a> could not be loaded'
            },
            key: 'image-key',
            verticalFit: true,
            mainClass: 'image-popup-style',
            tError: '<a href="%url%">Teh image</a> could not be loaded',
            gallery: {
                enable: true,
                tCounter: '',
            },
            callbacks: {
                open: function () {
                    this.content.addClass('fadeInLeft');
                },
                close: function () {
                    this.content.removeClass('fadeInLeft');
                }
            }
        });

        this.$prettyVideo.magnificPopup({
            type: "iframe",

            image: {
                titleSrc: function(item) {
                    return item.el.parents('figure').find('h6').html();
                },
                tError: '<a href="%url%">Teh image #%curr% </a> could not be loaded'
            },
            key: 'image-key',
            verticalFit: true,
            mainClass: 'image-popup-style',
            tError: '<a href="%url%">Teh image</a> could not be loaded',
            gallery: {
                enable: true,
                tCounter: '',
            },
            callbacks: {
                open: function () {
                    this.content.addClass('fadeInLeft');
                },
                close: function () {
                    this.content.removeClass('fadeInLeft');
                }
            }
        });
    },

    /** preloader **/
    preloader: function () {
        $(window).on('load', function () {
            Pace.on("done", function() {
                $('#preload').fadeout(300);
            });
        });
    },

    backToTop: function () {
        this.$backToTop.on('click', function () {
            $('body, html').animate({
                scrollTo: 0
            }, this.options.scrollToTopAnimSpeed);
        })
    },

    closeFooter: function () {
        var self = this;
        var finished = false;
        if (finished) {
            var checked = true;

            if ($(this.$footerContact.css('position') === 'static')) {
                $(this.$footerContact).css({position: 'relative'});
                this.$footerContactContent.css({position: 'absolute'});
                this.$googleMapCaptionMap.fadeOut();

                checked = false;
            }

            this.$activeFooter.slideToggle('slow', function() {
                if (checked) {
                    //this.$footerContact.css({ position: 'static' });
                    self.$footerContact.css({position: 'static'});
                    self.$footerContactContent.css({ position: 'relative' });
                    self.$googleMapCaptionMap.fadeIn();
                }

                finished = true;
            })
        }
    }
};

resource.init();

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});

var scroller = {
    init: function () {
        this.scrollHandle();
    },

    scrollHandle: function () {
        var scrollPos = parseInt($(window).scrollTop(), 10);
        var truePos = parseInt($('href').offset().top, 10);
        var pos = truePos - 65;

        $('.inner-nav li a[href^="#"]').each(function () {
            var href = $(this).attr('href');
            if ($(href).length) {


                if (scrollPos >= pos) {
                    $('.inner-nav li a[href^="#"]').removeClass('nav-active');
                    $('.inner-nav li a[href="' + href +'"]').addClass('nav-active');
                }
            } else {
                if (scrollPos >= pos || scrollPos >= pos) {

                }
            }
        })
    }
};

scroller.init();