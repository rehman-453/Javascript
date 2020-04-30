// function countOptions() {
//     alert("There are " + document.getElementById("lst").length + " items in list.\n")
// }
function getOptions() {
    var x = document.getElementById("lst");
    var txt1 = "No. of items : " + x.length;
    for (var i = 0; i < x.length; i++) {
        txt1 = txt1 + "\n" + x.options[i].text;
    }
    alert(txt1);
}