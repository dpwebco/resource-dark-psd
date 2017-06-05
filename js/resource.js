var resource = {
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
        this.$submitBtn.on('click', this.validateForm());
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
    }
};

resource.init();