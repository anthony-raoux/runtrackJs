var textarea = document.getElementById("keylogger");

    window.addEventListener("keydown", function(event) {
        var key = event.key;

        if (/^[a-zA-Z]$/.test(key)) {
            if (document.activeElement === textarea) {
                textarea.value += key;
            } else {
                textarea.value += key;
            }
        }
    });