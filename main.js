$(document).ready(function(){
    resizeNav();
    resizeCardImages();
});

$(window).resize(function(){
    resizeNav();
    resizeCardImages();
});


//Makes the nav elements column in the nav the height of the brand column
var resizeNav = function(){
console.log("nav resized from "+$('#js-nav-elements').height()+" to "+$('nav').height());
    $('#js-nav-elements').height($('nav').height());
console.log($('#js-nav-elements').height());
};

//Set the card image heights to dynamically match the widths
var resizeCardImages = function(){
    $('.js-resize').height($('.js-resize').width());
};