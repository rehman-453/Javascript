/*
Q13. You have given the following arrays: 
    var students = ["Ali", "Sami", "Taha", "Inam"]; 
    var scores  = [58, 73, 89, 90]; 
    Write a program to generate the following HTML table in your browser using JS. 
*/

var students = ["Ali", "Sami", "Taha", "Inam"]
var scores = [58, 73, 89, 90]

document.write("<tr><th>Students</th><th>Scores</th></tr>")
for(i=0; i<students.length; i++)
{
    document.write("<tr> <td>"+ students[i] + " </td> <td>"+ scores[i] +" </td> </tr>")
}