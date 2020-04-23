/*
Q29. The Temperature Converter
    It's hot out! Let's make a converter based on the steps here.
    Create a function called celsiusToFahrenheit:
        • Store a celsius temperature into a variable.
        • Convert it to fahrenheit and output "NN°C is NN°F".
    Create a function called fahrenheitToCelsius:
        • Now store a fahrenheit temperature into a variable.
        • Convert it to celsius and output "NN°F is NN°C."
*/
document.write('<u><h3>The Temperature Convrter</h3></u>')

celsiusToFahrenheit()
fahrenheitToCelsius()

function celsiusToFahrenheit()
{
    var C_temp = 12
    var F_temp = (C_temp*(9/5))+32
    document.write(C_temp+"<sup>o</sup>C is "+ F_temp +"<sup>o</sup>F<br>")
}

function fahrenheitToCelsius()
{
    var F_temp = 68
    var C_temp = (F_temp-32)*5/9
    document.write(F_temp+"<sup>o</sup>F is "+ C_temp +"<sup>o</sup>C<br>")
}