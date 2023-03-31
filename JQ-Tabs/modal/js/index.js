var modal = $("#myModal");

$("#mybutton").click(function(){
    modal.addClass("display");
})

$(".close").click(function(){
    modal.removeClass("display");
})
$(".modal").click (function() {
    if (modal.hasClass("display")) {
        modal.removeClass("display");
    }
})



