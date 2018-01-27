$('.filter-option').click(function() {
    var instructions = $(this).attr('id').split('--');

    if(instructions[0] == 'sort') {
        if(instructions[1] == 'name') {
            sortByName(cards);
        } else if(instructions[1] == 'price') {
            sortByPrice(cards);
        }
    }
});

let sortByName = function(cards) {
    $mainContainer.html('');
    fillCards(cards.sort(function(a, b) {
        if(a.name < b.name) { return -1; }
        else if(a.name > b.name) { return 1; }
        else { return 0; }
    }));
};

let sortByPrice = function(cards) {
    $mainContainer.html('');
    fillCards(cards.sort(function(a, b) {
        return a.price - b.price;
    }));
};