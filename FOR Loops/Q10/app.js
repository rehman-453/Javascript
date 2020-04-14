/*
Q10. Write a program to identify the smallest number in the given array.  
    A = [24, 53, 78, 91, 12] 
*/

var A = [24, 53, 78, 91, 12] 
document.write("Array items: "+ A +"<br>")
var smallest = 10000000
for(i=0; i<=A.length; i++)
{
    if(A[i]<smallest)
    {
        smallest = A[i]
    }
}
document.write("The Smallest number is "+ smallest)