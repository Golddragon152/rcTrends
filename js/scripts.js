$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass("navi-scrolled");
    } else {
        $('.navbar').removeClass("navi-scrolled");
    }
});

var offset = 75;

$('.navbar li a').click(function () {
    event.preventDefault();
    $('.navbar li').removeClass('active');
    $(this).parent().addClass('active');

    scrollToAnchor($(this).attr("href"));
});

$('.ghost-button').click(function () {
    event.preventDefault();
    scrollToAnchor($(this).attr("href"));
});

function scrollToAnchor(aid) {
    if (aid.indexOf("#") !== -1) {
        aid = aid.replace("#", "");
    }
    var aTag = $("div[id='" + aid + "']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}