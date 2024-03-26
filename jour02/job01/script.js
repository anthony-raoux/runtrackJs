function citation() {
    var citationText = document.getElementById("citation").innerText;
    console.log(citationText);
}

document.getElementById("button").addEventListener("click", citation);