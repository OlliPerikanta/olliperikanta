$(document).ready(function ($) {
    $(document).ready(function () {


        $(".navbar").hide();


        $(function () {
            $(window).scroll(function () {


                if ($(this).scrollTop() > 300) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });

    });
});

$(document).ready(function () {


    $('.navbar-brand').click(function (e) {

        $(".navbar-collapse").collapse('hide');
        var headerHeight = $('header').outerHeight();
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });



    $('.dropdown-toggle').click(function (e) {

        var headerHeight = $('header').outerHeight();
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });

    $('.btn-info').click(function (e) {



        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);

        e.preventDefault();
    });

    $('.scroll-link').click(function (e) {

        $(".navbar-collapse").collapse('hide');
        var headerHeight = $('header').outerHeight();
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });

    $('.etusivu').click(function (e) {


        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);

        e.preventDefault();
    });

    $('a.btn.btn-primary').click(function (e) {

        var headerHeight = $('header').outerHeight();
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });




});






$(document).ready(function () {

    $(".vaihto").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {

            $('.filter').show('1000');
        } else {

            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});


$(document).ready(function () {
    $(".dropdown-toggle").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});






$(document).ready(function () {

    $('.sivulle').hide();


    $(window).scroll(function () {


        $('.testaus').each(function (i) {

            var kohteenPohja = $(this).offset().top + $(this).outerHeight();
            var ruudunPohja = $(window).scrollTop() + $(window).height();


            if (ruudunPohja > kohteenPohja) {

                $('.sivulle').fadeIn();

            }

        });

    });

});

$(document).ready(function () {

    $('.sivulle2').hide();


    $(window).scroll(function () {


        $('.testaus2').each(function (i) {

            var kohteenPohja = $(this).offset().top + $(this).outerHeight();
            var ruudunPohja = $(window).scrollTop() + $(window).height();


            if (ruudunPohja > kohteenPohja) {

                $('.sivulle2').fadeIn();

            }

        });

    });

});

$(document).ready(function () {

    $('.sivulle3').hide();


    $(window).scroll(function () {


        $('.testaus3').each(function (i) {

            var kohteenPohja = $(this).offset().top + $(this).outerHeight();
            var ruudunPohja = $(window).scrollTop() + $(window).height();


            if (ruudunPohja > kohteenPohja) {

                $('.sivulle3').fadeIn();

            }

        });

    });

});

$(document).ready(function () {

    $('.sivulle4').hide();


    $(window).scroll(function () {


        $('.testaus4').each(function (i) {

            var kohteenPohja = $(this).offset().top + $(this).outerHeight();
            var ruudunPohja = $(window).scrollTop() + $(window).height();


            if (ruudunPohja > kohteenPohja) {

                $('.sivulle4').fadeIn();

            }

        });

    });

});

$(document).ready(function () {

    $('.progress-bar').hide();


    $(window).scroll(function () {


        $('.esilletulo').each(function (i) {

            var kohteenPohja = $(this).offset().top + $(this).outerHeight();
            var ruudunPohja = $(window).scrollTop() + $(window).height();


            if (ruudunPohja > kohteenPohja) {

                $('.progress-bar').fadeIn();

            }

        });

    });

});
