/*
Q11. Write a program to identify the largest & the smallest number in the given array.  
    A = [24, 53, 78, 91, 12] 
*/
var A = [24, 53, 78, 91, 12] 
document.write("Array items: "+ A +"<br>")
var smallest = 10000000
var largest = 0
for(i=0; i<=A.length; i++)
{
    if(A[i]<smallest)
    {
        smallest = A[i]
    }
    if(A[i]>largest)
    {
        largest = A[i]
    }
}
document.write("The Smallest number is "+ smallest)
document.write("<br>The largest number is "+ largest)