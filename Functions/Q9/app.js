/*
Q9. Write a nested function that computes hypotenuse of a right angle triangle. 
    Hypotenuse2 = Base2 + Perpendicular2 
    Take base and perpendicular as inputs. 
    Outer function: calculateHypotenuse() 
    Inner function: calculateSquare()
*/

var perp = parseInt(prompt('Enter perpendicular of a triangle'))
var base = parseInt(prompt('Enter base of a triangle'))

alert(hypotenus(base,perp))

document.write('H<sup>2</sup> = P<sup>2</sup> + B<sup>2</sup> <br>')
document.write('H<sup>2</sup> = '+ perp +'<sup>2</sup> + '+ base +'<sup>2</sup> <br>')
document.write('H<sup>2</sup> = '+ square(perp) +' + '+ square(base) + '<br>' )
document.write('H<sup>2</sup> = '+ hypotenus(base,perp))

function hypotenus(b,p)
{
    h = square(p) + square(b)
    return(h)
}

function square(n)
{
    sqr = n**2
    return(sqr)
}