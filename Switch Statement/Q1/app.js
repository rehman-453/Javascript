/*
1. Write a switch statement with the following condition:
    If the variable age is greater than 18, output "Old enough",
    otherwise output "Too young".
*/
var age = parseInt(prompt('Enter your age'))
switch(true)
{
    case age > 18:
        alert('old enough')
        break
    case age < 18:
        alert('Too young')
        break
    default:
        alert('average')
}