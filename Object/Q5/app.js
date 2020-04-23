/*
Q5: Write a program to check if student is eligible for Module A class, following fields use in 
    Student Object
        Student_Name : “Rehan Uddin”,
        Student_Age : 20 → Check the Condition
    If student age is > 20 then not eligible for Module A classes
*/
var Student = {
    Student_Name : 'Rehan Uddin',
    Student_Age : 20
}

if(Student.Student_Age > 20)
{
    alert('Student not elligible for Module A classes')
}
else
{
    alert('Student elligible for Module A classes')
}