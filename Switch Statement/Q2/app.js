/*
Q2. Write a program to check whether the given input number is divisible by 3 or not by using 
    Switch Case statements. Show a message “Number is not divisible by 3” or “Number is divisible
    by 3”.
*/
var num = parseInt(prompt('Enter any number'))
var ans = num % 3

switch (ans)
{
    case 0:
        alert(num +' is divisible by 3')
        break
    default:
        alert(num +' is not divisible by 3')
        break
}