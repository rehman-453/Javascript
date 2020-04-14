/*
Q16. Write a program to repeatedly print the value of the variable num which is input 
    by user. Value should be decreasing by 0.5 each time, as long as x Value remains 
    positive. 
*/

var num = parseInt(prompt("Enter a number"))
for(i=num; i>=0;)
{
    document.write(i + ', ')
    i= i-0.5
}