/*
Q4: Write a program to create student mark sheet, use following fields in Object
        Student_Name : “Zia Khan”,
        Student_ID : =J30052425300,
        Subject_HTML : 80,  
        Subject_CSS : 90,
        Subject_JAVASCRIPT : 90,
        Subject_BOOTSTRAP : 70,
        Total_Marks : 400
*/
var Student = {
    Student_Name : 'Zia Khan',
    Student_ID : 'J30052425300',
    Subject_HTML : 80,
    Subject_CSS : 90,
    Subject_JAVASCRIPT : 90,
    Subject_BOOTSTRAP : 70,
    Total_Marks : 400
}
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

