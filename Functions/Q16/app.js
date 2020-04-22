/*
Q16. Write a function that computes power of a number. E.g. 23 is 8.
*/

var base = parseInt(prompt('Enter base value'))
var exponent = parseInt(prompt('Enter exponent value'))

document.write(base +'<sup>'+ exponent +'</sup> = '+ power(base,exponent))

function power(b,exp)
{
    ans = b ** exp
    return(ans)
}