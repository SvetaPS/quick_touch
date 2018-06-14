$(document).ready(function(){
    $('.banner-slider').owlCarousel({
        loop:true,
        nav:false,
        // autoHeight: true,
        dots: true,
        // autoplayTimeout:5000,
        items: 1,
        autoplay: false
    });

    $('.header-mobile .mob-pages').click(function(){
        $('.mobile-screen .page').removeClass('active');
    });
    var $page = $('html, body');
    $('.menu-link').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 400);

        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
        return false;
    });


    $("#registrationForm").submit(function(e) {

        var url = "https://menu.s1l3nt.xyz/api/v1/sign_up";

        $.ajax({
            type: "POST",
            url: url,
            data: $("#registrationForm").serialize(),
            success: function()
            {
                $('#connectModal').modal('hide');

                $('#successModal').modal('show');
            },
            error: function(){
                $('#connectModal').modal('hide');
                $('#unsuccessModal').modal('show');
            }
        });
        e.preventDefault();
    });



    $("#registrationForm").validate({
        errorClass: "invalid",
        validClass: "success",
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element).parent().find("span")
                .addClass(errorClass);
            $(element).parent().find("span")
                .removeClass(validClass);

        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element).parent().find("span")
                .removeClass(errorClass);
            $(element).parent().find("span")
                .addClass(validClass);
        },
        errorPlacement: function(){
            return false;  // suppresses error message text
        },
            restaurant_name: "required",
            restaurant_type: "required",
            phone: "required",

            email: {
                required: false,
                email: true

             },
            rules: {
                password: "required",
                confirm_password: {
                    equalTo: "#password"
                }
            }

    });

    $('#inputPhone').inputmask("999-999-99-99", { showMaskOnFocus: true, showMaskOnHover: false} );

    // https://bar.s1l3nt.xyz/api/v1/sign_up/
});
