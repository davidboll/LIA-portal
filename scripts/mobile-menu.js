$(() => {
    // Toggle the menu when clicking on the hamburger menu icon
    $('#hamburger-menu').on('click', function () {
        $('#menu').slideToggle();
    });

    // Toggle the submenu when clicking on "Portal" on mobile devices
    $('#menu li.portal-item a').on('click', function (e) {
        e.preventDefault();
        $('.submenu').slideToggle();
    });

    // Close the submenu when clicking outside of it
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#menu li.portal-item').length) {
            $('.submenu').slideUp();
        }
    });

    // Hide the menu when resizing to a larger screen
    $(window).resize(function () {
        if ($(window).width() > 600) {
            $('#menu').show();
            $('.submenu').hide();
        } else {
            $('#menu').hide();
        }
    });
});




