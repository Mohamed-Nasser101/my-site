/*global $, alert, console*/
$(function(){
    "use strict";
    $(".header").height($(window).height());
    $(window).resize(function(){
        $(".header").height($(window).height());
        $(".bxslider").css("padding-top", ($(window).height() - $(".bxslider").height()) / 2 )
    })
    $(".navbar .links li a").click(function(){
        $(this).parent().siblings("li").removeClass("active").end().parent().addClass("active")
    })
    $(".bxslider").bxSlider({
        pager: false
    });
    $(".bxslider").css("padding-top", ($(window).height() - $(".bxslider").height()) / 2 )
    $(".links li a").click(function () { 
        $("html").animate({
            scrollTop : $("#"+$(this).data("value")).offset().top
        },350)
     })

     var y = 1;
     var x = setInterval(() => {
         if (y == $(".slider > div").length) { y = 0;}
         $(".slider > div").fadeOut(0);
         $(".slider > div").eq(y).fadeIn()
         y++;
     }, 2000);
    $("#Container").mixItUp();
    $(".shuffle li").click(function () {
        $(".shuffle li").removeClass("selected");
        $(this).addClass("selected");
    })
    $("html").niceScroll({
        cursorcolor: '#1abc9c',
        cursorborder: "1px solid #1abc9c",
        cursorwidth: "10px"
    });





})