(function($) {
    var $hasSub = $('.has-sub'),
        $subMenu = $('.sub-menu'),
        $navToggle = $('.nav-toggle-menu');


    $hasSub.on('click', function(e) {
        $(this).find('.sub-menu').toggle();
    })

    $navToggle.on('click', function(e) {
        $('body').toggleClass('show-menu');
        $(this).toggleClass('rotate-toggle-menu');
    })


})(jQuery);