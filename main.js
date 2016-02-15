$(document).ready(function(){
    
});

$(window).resize(function(){
    //Close any open modals if the screen is resized to Large
    if($(document).width() > 992){
        $(".modal").closeModal();
    }
});


//Only open card modals in Medium or Small modes
function conditionalCardModal(modalId){
    if($(document).width() <= 992)
        $(modalId).openModal();
}