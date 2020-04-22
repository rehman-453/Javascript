/*
Q7. Write a function that computes factorial of a number.
*/

var num = parseInt(prompt('Enter number'))
alert(num +'! = '+ factorial(num))

function factorial(a) 
{
    if (a == 0)
    {
        return 1
    }
    return a * factorial(a-1)
}