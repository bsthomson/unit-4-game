$( document ).ready(function() {

    var winCounter = 0;
    var loseCounter = 0;
    var enemyCounter = 3;
    var centerGoodEmpty = true;
    var centerBadEmpty = true;
    var goodGuy;
    var badGuy;

    var characters = { 
        "travelingSeamstress": {
            HP: 150,
            attack: 30,
            counterAttack: 10,
        },
        
        "evilYeti": {
            HP: 210,
            attack: 25,
            counterAttack: 5,
        },

        "docSkull": {
            HP: 200,
            attack: 25,
            counterAttack: 5,
        },

        "dropBear": {
            HP: 90,
            attack: 50,
            counterAttack: 25,
        },

        "root": {
            HP: 110,
            attack: 35,
            counterAttack: 10,
        },

        "clamDwarf": {
            HP: 50,
            attack: 100,
            counterAttack: 2,
        },
    };



    // Function to move player's character to middle and start the game
    $(".good").on("click", function() {
        if (centerGoodEmpty==true) {
            $(this).appendTo(".goodduel");
            // Ensures player can't pick a new character
            centerGoodEmpty=false;
            console.log($("goodduel".children("good".children("id"))))
        };
    
        // Function to move player's enemy to the middle
        $(".bad").on("click", function() {
            if (centerBadEmpty==true) {
                $(this).appendTo(".badduel");
                // Ensures player can't pick a new enemy
                centerBadEmpty=false;
                $(".character").on("click", function() {
                    console.log(this.HP);
                })
            };
        });
    }); 
});