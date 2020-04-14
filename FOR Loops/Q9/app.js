/*
Q9. Write a program to identify the largest number in the given array. 
    A = [24, 53, 78, 91, 12] 
*/

var A = [24, 53, 78, 91, 12] 
document.write("Array items: "+ A +"<br>")
var largest = 0
for(i=0; i<=largest; i++)
{
    if(A[i]>largest)
    {
        largest = A[i]
    }
}
document.write("The largest number is "+ largest)