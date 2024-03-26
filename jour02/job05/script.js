window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = window.scrollY;
    var scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 75%)";
});