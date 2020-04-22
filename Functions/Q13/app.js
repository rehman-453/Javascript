/*
Q13. Write a function that receives an array & returns the sorted array.
*/

var Array = [" Banana", " Orange", " Apple", " Mango", " Kiwi", " Pineapple", " Grapes"]

document.write('Array = ['+ Array + ']<br>')
document.write('Sorted Array = ['+ sorting(Array) + ']<br>')

function sorting(A)
{
    A.sort()
    return(A)
}