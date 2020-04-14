/*
Q15. You have an array 
    A = [ [1,2,3] , [4,5,6] , [7,8,9] ] 
    Write each element on new line with the help of nested for loops. 
*/

var A = [ [1,2,3] , [4,5,6] , [7,8,9] ] 

for(i=0; i<A.length; i++)
{
    for(j=0; j<A[i].length; j++)
    {
        document.write(A[i][j] + ' ')
    }
    document.write("<br>")
}