/*
Q11. Write a function that accepts any number of arguments & find largest of the number.
*/

maximum = max([24, 53, 78, 91, 12,355])
document.write("The largest number is "+ maximum)

function max(A)
{
    document.write("Array items: "+ A +"<br>")
    var largest = 0
    for(i=0; i<=largest; i++)
    {
        if(A[i]>largest)
        {
            largest = A[i]
        }
    }
    return(largest)
}
