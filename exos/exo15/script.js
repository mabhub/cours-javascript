//*
//Sans jQuery
(function() {

    "use strict";

    let input = document.getElementById("titrePage");

    input.addEventListener("input",function() {

        document.title = this.value;
    });

}());
//*/

/*
//Avec jQuery
$(function() {

    "use strict";

    $("#titrePage").on("input",function() {
        document.title = this.value;
    });
});
//*/
