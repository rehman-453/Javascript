/*
Q6: Write a program to create two student Mark sheet, and check the conditions as given in question
    Student_One
    {
        Student_Name : “Zia Khan”,
        Student_ID : =J30052425300,
        Subject_HTML : 80,
        Student_CSS : 90,
        Student_JAVASCRIPT : 90,
        Student_BOOTSTRAP : 70,
        Total_Marks : 400
    }
    Student_Two
    {
        Student_Name : “Zia Khan”,
        Student_ID : =J30052425300,
        Subject_HTML : 60,
        Student_CSS : 70,
        Student_JAVASCRIPT : 65,
        Student_BOOTSTRAP : 85,
        Total_Marks : 400
    }
    Show the percentage for both and check the condition, if Student_One’s percentage > Student_Two then eligible for 
    scholarship
*/

var Student_One = {
    Student_Name : 'Sami Ur Rehman',
    Student_ID : 'J30052425300',
    Subject_HTML : 80,
    Subject_CSS : 90,
    Subject_JAVASCRIPT : 90,
    Subject_BOOTSTRAP : 70,
    Total_Marks : 400
}

var Student_Two = {
    Student_Name : 'Zia Ur Rehman',
    Student_ID : 'J30052425355',
    Subject_HTML : 60,
    Subject_CSS : 70,
    Subject_JAVASCRIPT : 65,
    Subject_BOOTSTRAP : 85,
    Total_Marks : 400
}

var Obtained_Marks_One = Student_One.Subject_HTML + Student_One.Subject_CSS + Student_One.Subject_JAVASCRIPT + Student_One.Subject_BOOTSTRAP
var percentage_One = marksheet(Obtained_Marks_One,Student_One.Total_Marks)

var Obtained_Marks_Two = Student_Two.Subject_HTML + Student_Two.Subject_CSS + Student_Two.Subject_JAVASCRIPT + Student_Two.Subject_BOOTSTRAP
var percentage_Two = marksheet(Obtained_Marks_Two,Student_Two.Total_Marks)

document.write(Student_One.Student_Name +' achieve '+ percentage_One +'% <br><br>')
document.write(Student_Two.Student_Name +' achieve '+ percentage_Two +'% <br><br>')

if(percentage_One > percentage_Two)
{
    var winner = Student_One.Student_Name
}
else
{
    var winner = Student_Two.Student_Name
}
document.write(winner +' got scholarship')

function marksheet(obt_marks,tot_marks)
{
    var percentage = (obt_marks/tot_marks) * 100
    return(percentage)
}