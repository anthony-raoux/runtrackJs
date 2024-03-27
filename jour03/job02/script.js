$(document).ready(function() {
    $("#melanger").click(function() {
        var images = $("#arcenciel .container");
        images.sort(function() { return Math.random() - 0.5; });
        $("#arcenciel").empty().append(images);
        checkOrder();
    });

    $("#arcenciel").on("click", ".container", function() {
        var container = $(this);
        var prevContainer = container.prev();
        var nextContainer = container.next();
        
        if (prevContainer.length) {
            prevContainer.before(container);
        } else if (nextContainer.length) {
            nextContainer.after(container);
        }

        checkOrder();
    });

    function checkOrder() {
        var ordered = true;
        $("#arcenciel .arcenciel-img").each(function(index) {
            var expectedOrder = index + 1;
            var currentOrder = parseInt($(this).attr("alt"));
            if (expectedOrder !== currentOrder) {
                ordered = false;
                return false; 
            }
        });
        if (ordered) {
            $("#message").text("Vous avez gagné").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu").css("color", "red");
        }
    }
});
