var cardTemp = $('#card-template').html();
var $mainContainer = $('.cards.container');

$(function(){
    var lastCategory = 'category--any', lastPrice = 'price--any';
    $('.filter-option').click(function(e){
        var id = $(this).attr('id');
        var parts = id.split('--');
        var type = parts[2] == 'mobile' ? 'desktop' : 'mobile';
        switch(parts[0]){
            case 'price':
                $('#'+lastPrice+'--'+type).prop('checked', false);
                lastPrice = parts[0]+'--'+parts[1];
                $('#'+parts[0]+'--'+parts[1]+'--'+type).prop('checked', true);
                break;              
            case 'category':
                $('#'+lastCategory+'--'+type).prop('checked', false);
                lastCategory = parts[0]+'--'+parts[1];
                $('#'+parts[0]+'--'+parts[1]+'--'+type).prop('checked', true); 
                break;               
            case 'sort':
                var sort = parts[1] == 'name' ? 'price' : 'name';
                $('#'+sort+'--'+type).prop('checked', false);
                $('#'+parts[0]+'--'+parts[1]+'--'+type).prop('checked', true);   
                break;             
            case 'recent':
                var type = parts[1] == 'mobile' ? 'desktop' : 'mobile';
                $('recent--'+type).prop('checked', $(this).prop('checked'));
                break;
        }
    });
});

$(window).resize(function(){
    //Close any open modals if the screen is resized to Large
    if($(document).width() > 992){
        $(".modal").modal('close');
        // $(".lean-overlay").hide(); //Above line closes modal, background was still greyed out.
    }
});

//Only open card modals in Medium or Small modes
let conditionalCardModal = function(identifier){
    if($(document).width() <= 992)    
        $('#' + $(identifier).data('target')).modal('open');
};

$(document).ready(function() {
    $('.modal').modal();

    fillCards(cards);
});

let fillCards = function(cards) {
    cards.forEach(function(card) {
        card.price_formatted = '$' + card.price.toFixed(2);
        $mainContainer.append(Mustache.render(cardTemp, card));
    });
};

