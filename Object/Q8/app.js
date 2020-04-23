/*
Q8: Write a program to take user input and create student mark sheet?
    Student_Name : user input,
    Student_ID : user input,
    Subject_HTML : user input,
    Student_CSS : user input,
    Student_JAVASCRIPT : user input,
    Student_BOOTSTRAP : user input,
    Total_Marks : user input
*/

var Student = {
    Student_Name : '',
    Student_ID : '',
    Subject_HTML : '',
    Subject_CSS : '',
    Subject_JAVASCRIPT : '',
    Subject_BOOTSTRAP : '',
    Total_Marks : ''
}

Student.Student_Name = prompt('Enter Student Name')
Student.Student_ID = prompt("Enter Student ID")
Student.Subject_HTML = parseInt(prompt('Enter HTML marks '))
Student.Subject_CSS = parseInt(prompt('Enter CSS marks '))
Student.Subject_JAVASCRIPT = parseInt(prompt('Enter JAVASCRIPT marks  '))
Student.Subject_BOOTSTRAP = parseInt(prompt('Enter BOOTSTRAP marks  '))
Student.Total_Marks = parseInt(prompt('Enter Total marks  '))


var Obtained_Marks = Student.Subject_HTML + Student.Subject_CSS + Student.Subject_JAVASCRIPT + Student.Subject_BOOTSTRAP
var Percentage = (Obtained_Marks/Student.Total_Marks) * 100

document.write('<h2>Student Marksheet</h2>')
document.write('<b>Student Name:</b> <i>'+ Student.Student_Name +'</i><br>')
document.write('<b>Student ID:</b> <i>'+ Student.Student_ID +'</i><br><br>')
document.write('HTML:      '+ Student.Subject_HTML +'<br>')
document.write('CSS:       '+ Student.Subject_CSS +'<br>')
document.write('JAVASCRIPT: '+ Student.Subject_JAVASCRIPT +'<br>')
document.write('BOOTSTRAP: '+ Student.Subject_BOOTSTRAP +'<br><br>')
document.write('Obtained Marks: '+ Obtained_Marks +'<br>')
document.write('Total Marks: '+ Student.Total_Marks +'<br>')
document.write('Percentage: '+ Percentage +'%')