var konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

var konamiIndex = 0;

function konamiHandler(event) {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add("konami");
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
}

document.addEventListener("keydown", konamiHandler);