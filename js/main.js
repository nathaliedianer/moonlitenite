$(document).ready(function () {
    console.log('ready!');
});

$('.product-name').click(function () {
    $('.textbox').animate({ left: '250px' });
});

if ($(window).width() > 786) {
    $('.alert').hide().delay(750).slideDown(400);
};
$('.close_btn').click(function () {
    $('.close_btn').fadeOut(200);
    $('.alert').slideUp(400);
});

$('.shopping span').hide();

$('.shopping button').click(function () {
    $('.shopping span').show();
    $('.shopping button').hide();
    $('.price').hide();
});

$(function () {
    $('.menu').click(function () {
        $('ul').toggle();
    });

});