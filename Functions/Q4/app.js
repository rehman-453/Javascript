/*
Q4. Write a function that adds two numbers (input by user) and returns the sum of two 
    numbers.
*/

var num1 = parseInt(prompt('Enter first number:'))
var num2 = parseInt(prompt('Enter second number:'))

document.write(num1 +' + '+ num2 +' = '+ sum(num1,num2))

function sum(a,b)
{
    add = a+b
    return(add)
}
