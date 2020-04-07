/*
Q11. The Age Calculator: Forgot how old someone is? Calculate it! 
    a. Store the current year in a variable. 
    b. Store their birth year in a variable. 
    c. Calculate their 2 possible ages based on the stored values. 
Output them to the screen like so: “They are either NN or NN years old”.   
*/

var current_year = prompt("Enter Current year")
var birth_year = prompt("Enter your birth year")
var age = current_year - birth_year
var age1 = age + 1
document.write("<b>Age Calculator</b>")
document.write("<br><br>")
document.write("Current Year : "+current_year)
document.write("<br>")
document.write("Birth Year : "+birth_year)
document.write("<br><br>")
document.write("They are either "+ age +" or "+ age1 +" years old")