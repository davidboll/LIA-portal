$(() => {

    $('#hamburger-menu').on('click', function () {
        $('#menu').slideToggle();
    });

    $('#menu li.portal-item a').on('click', function (e) {
        e.preventDefault();
        $('.submenu').slideToggle();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#menu li.portal-item').length) {
            $('.submenu').slideUp();
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 991) {
            $('#menu').show();
            $('.submenu').hide();
        } else {
            $('#menu').hide();
        }
    });
});




