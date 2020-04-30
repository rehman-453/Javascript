function USD_to_PKR() 
{
    var a = document.getElementById("usd1").value;
    var b = document.getElementById("pkr1");
    var amount  = a * 105;
    b.value = amount
}

function PKR_to_USD()
{
    var c = document.getElementById('pkr2').value
    var d = document.getElementById('usd2')
    var amount = c / 105
    d.value = amount
}