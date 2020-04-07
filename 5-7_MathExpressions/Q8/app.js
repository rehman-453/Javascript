/*
Q8. Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result 
in your browser. 
*/

var obtained_marks = prompt("Enter Obtained marks")
var total_marks = prompt("Enter total marks")
var percentage = (obtained_marks/total_marks)*100
document.write("<b>Marks Sheet</b>")
document.write("<br><br><br>")
document.write("Total Marks : "+total_marks)
document.write("<br>")
document.write("Obtained Marks : "+obtained_marks)
document.write("<br>")
document.write("Percentage : "+ percentage +"%")