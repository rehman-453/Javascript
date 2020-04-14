/*
Q14. Write a program that prints number from start of the array to desired stop value. Given array: 
    var scores  = [12, 45, 3, 22, 34, 50]; 
    (Hint: take stop value from user) 
    E.g. if user gives 3 as input value print 12, 45, 3 
    if user gives 34 as input value print 12, 45, 3, 22, 34 
*/

var scores = [12, 45, 3, 22, 34, 50]
document.write("scores = ["+ scores +"]<br>")
var stop = parseInt(prompt("Enter Stop value","12, 45, 3, 22, 34, 50"))

for(i=0; i<=scores.indexOf(stop); i++)
{
    document.write(scores[i] + ", ")
}