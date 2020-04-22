/*
Q6. Write a function that squares its argument.
*/

var num = parseInt(prompt('Enter number you want to square'))

alert(num +'^2 ='+ square(num))

function square(a)
{
    ans = a**2
    return(ans)
}