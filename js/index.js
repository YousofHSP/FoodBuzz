
$(".tablinks").click(function(e){
    var data = $(this).attr("data");
    $(".tablinks").removeClass("active");
    $(this).addClass("active");
    $(".tabcontent").hide();
    $("#" + data).show();
});