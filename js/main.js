$(document).ready(function(){
    
    function checkHeader(){
        let userScroll = $(window).scrollTop();
        if(userScroll > 100){
            $('header').addClass('active');
        }else {
            $('header').removeClass('active');
        }
    }
    
    checkHeader();
    $(window).scroll(function(){
        checkHeader();
        
    });
    
     // animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });
// animation end


 if ($('.portfolio-item-number').length > 0) {
        $('.portfolio-item-number').counterUp({
            time: 1000,
            delay: 10
        });


    }
    
     if($('.team-slider').length > 0){
         $(".team-slider").owlCarousel({
             margin: 10,
             autoplay: true,
             loop: true,
             autoplayHoverPause: true,
             responsive: {
                 0: {
                     items: 1,
                     margin: 0
                 },
                 500: {
                     items: 2     
                 },
                 768: {
                     items: 3   
                 },
                 992: {
                     items: 4   
                 }
             }
         });
    }
    
    // validacija forme

    if ($('.blog-form').length > 0) {
        $(function () {
            $(".blog-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    email: {
                        required: 'Email is required field.*',
                        email: 'Please, insert the valid email address.'
                    }
                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }
//Form Validation

// validacija forme

    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true
                    },
                    'contact-email': {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        maxlength: 255
                    }
                },
                messages: {
                    name: {
                        required: 'Name is a required field.*'
                    },
                    'contact-email': {
                        required: 'Email is a required field.*',
                        email: 'Please, insert the valid email address.'
                    },
                    message: {
                        required: 'Message is a required field.*',
                        maxlength: 'Max length of message field is 255 characters.*'
                    }
                    
                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }
//Form Validation
    

});


