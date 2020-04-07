/*
Q2. Repeat task1 for subtraction, multiplication, division & modulus. E.g.
*/
var num1 = prompt("Enter first number.")
var num2 = prompt("Enter second number")
num1 = parseInt(num1)
num2 = parseInt(num2)
sub = num1 - num2
mul = num1 * num2
div = num1 / num2
mod = num1 % num2

alert("Result of subtractin "+ num2 +" from "+ num1 +" is "+ sub)
alert("Result of multiplying "+ num1 +" and "+ num2 +" is "+ mul)
alert("Result of dividing "+ num1 +" by "+ num2 +" is "+ div)
alert("Remainder of dividing "+ num1 +" by "+ num2 +" is "+ mod)
