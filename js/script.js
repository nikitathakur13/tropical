$('.counter').counterUp({
    delay: 10,
    time: 2000
});
$("#menu-bars").click(function() {
    $('.header').toggle();
    $("#menu-bars").toggleClass("open-menu");
});
