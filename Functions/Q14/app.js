/*
Q14. Write a function that takes numbers array, sums its elements & returns the sum.
*/

var numbers = [1,2,3,4,5,6,7,8,9,10]

document.write('numbers = ['+ numbers +']<br>')
document.write('sum of array number = '+ array_sum(numbers))

function array_sum(num)
{
    sum = 0
    for(i=0; i<num.length; i++)
    {
        sum = sum + num[i]
    }
    return(sum)
}