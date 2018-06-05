var winCounter = 0;
var loseCounter = 0;
var centerGoodEmpty = true;
var centerBadEmpty = true;

$( document ).ready(function() {

    $(".good").on("click", function() {
        console.log("good");
    });

    if ("goodduel" === "goodempty"){
        console.log("goodduel");
    };

    $(".good").on("click", function() {
        if (centerGoodEmpty==true) {
            $(this).clone().appendTo(".goodduel");
            centerGoodEmpty=false;
        };
            alert(centerGoodEmpty);
            $(".bad").on("click", function() {
                if (centerBadEmpty==true) {
                    $(this).clone().appendTo(".badduel");
                    centerBadEmpty=false;
                };
            });
    });
        
});