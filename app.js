var main = function () {
    "use strict";

    $(".comment-input button").on("click", function (event) {
        console.log("Hello World!");
        var $new_comment = $("<p>").text($(".comment-input input").val());
        $new_comment.hide();
        $(".comments").append($new_comment);
        $new_comment.fadeIn();
        $(".comment-input input").val("");

    });
};

$(document).ready(main);



/* First example of window overlay
var main = function () {
    "use strict";

    window.alert("hello world!");
};

$(document).ready(main);
*/
