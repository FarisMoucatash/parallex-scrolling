$(window).on('scroll', function() {
    oceanParallax();
});

function oceanParallax() {
    var scrolled = $(window).scrollTop();

    $('.layer-bg').css('top', (0 - (scrolled * 0.1)) + 'px');
    $('.layer-mid').css('top', (0 - (scrolled * 0.3)) + 'px');
    
    $('.text-box').css('transform', 'translateY(' + (0 - (scrolled * 0.05)) + 'px)');

    $('.bubble-1').css('top', (100 - (scrolled * 1.2)) + 'px');
    $('.bubble-2').css('top', (300 - (scrolled * 0.8)) + 'px');
    $('.bubble-3').css('top', (500 - (scrolled * 1.5)) + 'px');
    $('.bubble-4').css('top', (700 - (scrolled * 1.0)) + 'px');
    $('.bubble-5').css('top', (900 - (scrolled * 1.8)) + 'px');
    
    $('.bubble').css('opacity', 1 - (scrolled / 1000));
}
