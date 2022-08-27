
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