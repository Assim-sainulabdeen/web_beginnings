
$('.tablinks').click(function () {
    var content = $(this).attr('data-tab');
    $(".tabcontent").hide();
    $("." + content).show();
});