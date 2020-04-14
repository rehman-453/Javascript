/*
Q3. Write a program to print multiplication table of any number using for loop. 
    Table number & length should be taken as an input from user. 
*/

var num = prompt("Enter a number to print its multiplication table")
var len = prompt("Enter length of multiplication table")

document.write("<h3>Multiplication Table of "+ num +" Length "+ len + "</h3>")

for(i=1; i<=len; i++)
{
    document.write(num +' x '+ i +' = '+ num*i + '<br>')
}