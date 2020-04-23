/*
Q28. The Geometrizer
    Create 2 functions that calculate properties of a circle, using the definitions here.
    Create a function called calcCircumference:
        • Pass the radius to the function.
        • Calculate the circumference based on the radius, and output "The circumference is NN".
    Create a function called calcArea:
        • Pass the radius to the function.
        • Calculate the area based on the radius, and output "The area is NN".
*/
var radius = prompt("Enter radius")
document.write("<h3>The Geometrizer</h3>")
document.write("Radius of circle is : "+ radius +'<br>')

circumference(radius)
area(radius)

function circumference(r)
{
    var s = 2 * 3.142 * r
    document.write('Circumference of circle: '+ s +' unit<br>')
    return(s)
}

function area(r)
{
    var A = 3.142 * r**2
    document.write('Area of circle: '+ A +' unit<sup>2</sup><br>')
    return (A)
}