/*
Q10. Use a conditional (ternary) operator for this exercise:
    If the variable age is a value below 18, the value of the variable voteable should be 
    "Too young", otherwise the value of voteable should be "Old enough".
*/

var age = parseInt(prompt("Enter Your Age"))
var output = (age < 18) ? 'Too Young' : 'Old enough'
alert(output)