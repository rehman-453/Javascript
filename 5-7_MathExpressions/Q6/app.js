/*
Q6.  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
    a. Store a Celsius temperature into a variable. 
    b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
    c. Now store a Fahrenheit temperature into a variable. 
    d. Convert it to Celsius & output “NNoF is NNoC”. 
*/

var C_temp = 12
var F_temp = (C_temp*(9/5))+32
document.write(C_temp+"<sup>o</sup>C is "+ F_temp +"<sup>o</sup>F")
F_temp = 68
C_temp = (F_temp-32)*5/9
document.write("<br>")
document.write(F_temp+"<sup>o</sup>F is "+ C_temp +"<sup>o</sup>C")
