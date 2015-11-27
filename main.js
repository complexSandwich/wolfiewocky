$(document).ready(function(){
    resizeCardImages();
});

$(window).resize(function(){
    resizeCardImages();
});

//TODO do this on page resize too
//Set the card image heights to dynamically match the widths
var resizeCardImages = function(){
    $('.js-resize').css({'height':$('.js-resize').width()+'px'});
};