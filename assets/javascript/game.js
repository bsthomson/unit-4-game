$( document ).ready(function() {

    var winCounter = 0;
    var loseCounter = 0;
    var centerGoodEmpty = true;
    var centerBadEmpty = true;
    // Function to move player's character to middle and start the game
    $(".good").on("click", function() {
        if (centerGoodEmpty==true) {
            $(this).clone().appendTo(".goodduel");
            // Ensures player can't pick a new character
            centerGoodEmpty=false;
        };
            // Function to move player's enemy to the middle
            $(".bad").on("click", function() {
                if (centerBadEmpty==true) {
                    $(this).clone().appendTo(".badduel");
                    // Ensures player can't pick a new enemy
                    centerBadEmpty=false;
                };
            });
    });
        
});