/*
Q18. Write a program to calculate the product of the odd integers from 1 to 7.
*/

var ans = 1
for(i=1; i<=7; i++)
{
    var rem = i % 2
    if(rem != 0)
    {
        ans = ans*i
    } 
}
document.write("The product of the odd integers from 1 to 7 is "+ ans)