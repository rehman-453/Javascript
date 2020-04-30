bold = document.getElementsByTagName('b');

function highlight() {
    for (var i = 0; i < bold.length; i++) {
        bold[i].style.color = "red"
    }
}

function normal() {
    for (var i = 0; i < bold.length; i++) {
        bold[i].style.color = "black"
    }
}