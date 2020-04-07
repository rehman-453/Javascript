/*
Q12. The Geometrizer: Calculate properties of a circle. 
    a. Store a radius into a variable. 
    b. Calculate the circumference based on the radius, and output “The circumference is NN”.  
    (Hint : Circumference of a circle = 2 π r ,   π = 3.142) 
Calculate the area based on the radius, and output “The area is NN”. 
(Hint : Area of a circle = π r2,  π = 3.142) 
*/

var r = prompt("Enter radius")
var pi = 3.142
var circumference, Area
circumference = 2*pi*r
Area = pi*r*r
document.write("<b>The Geometrizer</b>")
document.write("<br><br>")
document.write("Radius of circle is : "+r)
document.write("<br>")
document.write("The circumference is : "+circumference)
document.write("<br>")
document.write("The are is : "+Area)