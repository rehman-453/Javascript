/*
Q3: Write a program to create student bio data, following fields use in Student Object
    (First Name, Last Name, Age, ID, Contact #, Father Name, Residential Address)
*/

var Student = {
    First_Name : 'Amjad',
    Last_Name : 'Khan',
    Age : 26,
    ID : 3425,
    Contact_no : 03254352120,
    Father_Name : 'Mushtaq Khan',
    Residential_Address: 'House # 21, Block B, Gulshan e Iqbal, Karachi'
}
document.write('<h3>Student Bio Data</h3>')
document.write('<b>Student Name:</b> '+ Student.First_Name +' '+ Student.Last_Name +'<br>')
document.write('<b>Age:</b> '+ Student.Age +' years old<br>')
document.write('<b>Student ID:</b> '+ Student.ID +'<br>')
document.write('<b>Contact #</b> '+ Student.Contact_no +'<br>')
document.write('<b>Father Name:</b> '+ Student.Father_Name +'<br>')
document.write('<b>Residential Address:</b> '+ Student.Residential_Address +'<br>')