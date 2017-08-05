$(document).ready(function(){
    $("#sort--price").click(function(){
console.log("price");
        
        //$(".flex-card").get().sort(sortByName);
    });
});

$(window).resize(function(){
    //Close any open modals if the screen is resized to Large
    if($(document).width() > 992){
        $(".modal__card").closeModal();
    }
});


//Only open card modals in Medium or Small modes
function conditionalCardModal(modalId){
    if($(document).width() <= 992)
        $(modalId).openModal();
}


/********************************
            SORTERS
*********************************/

/* Don't need; sorting will be done server-side
var sortByPrice = function(a,b){
    return a.find(".card--price").text().localeCompare(b.find(".card--price").text());
}
*/