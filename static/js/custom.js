jQuery(function($) {
    "use strict";
 
    var options = {
        offset: 600,
        classes: {
            clone: 'banner--clone',
            stick: 'banner--stick',
            unstick: 'banner--unstick'
        }
    };
    var banner = new Headhesive('.navbar', options);
    
    var $nav = $('.nav').height();
    $('.nav').css('margin-top', -$nav / 2);
    $(window).on('load resize scroll', function() {
        var $heading = $('.wrapper .heading').outerHeight();
        var $navbar = $('.wrapper .navbar-header').outerHeight();
        $('#hero .item, #hero.single-page .blurb, #hero.error-page .container').css('padding-top', $heading + $navbar);
        var $window = $(window).height();
        $('#hero').css('height', window.innerHeight - 50);
        $('#hero.error-page').css('height', window.innerHeight);
    });
 
    jQuery('.single-slide').first().css({
        opacity: '1',
        height: 'auto',
        paddingBottom: '40px'
    }).siblings('.single-slide').css({
        opacity: '0',
        height: '0',
        paddingBottom: '0'
    });
    jQuery('#comingSoon div').first().css('opacity', '1').siblings().css('opacity', '.35');
    jQuery('#comingSoon div').click(function() {
        var currentClass = $(this).data("dynamicclass");
        $("div." + currentClass).css({
            opacity: '1',
            height: 'auto',
            paddingBottom: '40px'
        }).siblings('.single-slide').css({
            opacity: '0',
            height: '0',
            paddingBottom: '0'
        });
        $(this).css('opacity', '1').siblings().css('opacity', '.35');
        return false;
    });
});