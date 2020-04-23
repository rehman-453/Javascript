/*
Q7: Write a program to create student object and insert data through prompt, then show values in alert box
    Use following properties in object
        Name
        Age 
        Address
    And after show the data in alert box?
*/
var Student = {
    Name : '' ,
    Age : '' ,
    Address: ''
}

Student.Name = prompt('Enter Name:')
Student.Age = parseInt(prompt('Enter Age:'))
Student.Address = prompt('Enter Address:')
alert('Student Name: '+ Student.Name)
alert('Student Age: '+ Student.Age)
alert('Student Adress: '+ Student.Address)