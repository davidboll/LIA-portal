$(() => {

    $('#menu li.portal-item').on('click', function (e) {
        e.preventDefault();
        var $submenu = $(this).find('.submenu');
        $submenu.toggleClass('visible');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.submenu').length) {
            $('.submenu').removeClass('visible');
        }
    });
});

