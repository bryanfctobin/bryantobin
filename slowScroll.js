$(document).ready(function() {
    $("#learnMore").click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top -100
        }, 1000);
    });
    $("#menu-main-1 li:first-of-type").click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top -100
        }, 1000);
    });
    $("#menu-main-1 li:nth-child(3)").click(function(){
        $('html, body').animate({
            scrollTop: $("#solution").offset().top -100
        }, 1000);
    });
    $("#menu-main-1 li:nth-child(4)").click(function(){
        $('html, body').animate({
            scrollTop: $("#theTeam").offset().top -100
        }, 1000);
    });
    $("#menu-main-1 li:nth-child(5)").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top +550
        }, 1000);
    });
});