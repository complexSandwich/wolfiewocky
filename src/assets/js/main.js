$(window).resize(function(){
    //Close any open modals if the screen is resized to Large
    if($(document).width() > 992){
        $(".modal").closeModal();
        $(".lean-overlay").hide(); //Above line closes modal, background was still greyed out.
    }
});

//Only open card modals in Medium or Small modes
function conditionalCardModal(identifier){
    console.log($(identifier).data('test'));
    if($(document).width() <= 992)    
        $('#' + $(identifier).data('target')).openModal();
}