$( document ).ready(function() {

    var winCounter = 0;
    var loseCounter = 0;
    var centerGoodEmpty = true;
    var centerBadEmpty = true;
    
    var travelingSeamstress = {
        HP: 150,
        attack: 30,
        counterAttack: 10,
    };
    
    var evilYetiHP = {
        HP: 210,
        attack: 25,
        counterAttack: 5,
    };

    var docSkullHP = {
        HP: 200,
        attack: 25,
        counterAttack: 5,
    }

    var dropBearHP = {
        HP: 90,
        attack: 50,
        counterAttack: 25,
    };

    var rootHP = {
        HP: 110,
        attack: 35,
        counterAttack: 10,
    };

    var clamDwarfHP = {
        HP: 50,
        attack: 100,
        counterAttack: 2,
    };



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