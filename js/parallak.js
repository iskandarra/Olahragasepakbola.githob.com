$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $("h2").css({
        transform: "translate(0px, " + wScroll / 2 + "%)",
    });

    $("h1").css({
        transform: "translate(0px, " + wScroll / 4 + "%)",
    });

    $(".icon-sevrice").css({
        transform: "translate(0px, " + wScroll / -10 + "%)",
    });

    $("h3").css({
        transform: "translate(0px, " + wScroll / 2 + "%)",
    });

    $(".cel").css({
        transform: "translate(0px, " + wScroll / 2 + "%)",
    });
});

// console.log(wScroll);