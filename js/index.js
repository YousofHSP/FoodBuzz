
$(".tablinks").click(function(e){
    var data = $(this).attr("data");
    $(".tablinks").removeClass("active");
    $(this).addClass("active");
    $(".tabcontent").hide();
    $("#" + data).show();
});

$(".cart-icon").click(function (e) { 
    $(".cart-area").toggleClass("open");
});
$(".list-close a").click(function (e) { 
    e.preventDefault();
    $(".cart-area").removeClass("open");
    
 });

 $(".header-bar").click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("close");
    $(".mobile-menu").toggleClass("open");
 });

 $(".menu-item-has-children > a").click(function (e) { 
    e.preventDefault();
 });
 $(".mobile-menu .menu-item-has-children").click(function (e) { 
    e.preventDefault();
    if($(this).hasClass("open"))
    {
        $(this).children("ul").slideUp(1000,"swing");
        $(this).removeClass("open");
        
    }else{
        $(this).addClass("open");
        $(this).children("ul").slideDown(1000,"swing");
    }
    
 });