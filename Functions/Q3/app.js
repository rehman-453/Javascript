/*
Q3. Write a function that takes first & last name and then it greets the user using his 
    full name.
*/

greesUser()

function f_name()
{
    firstName = prompt('your first name:')
    lastName = prompt('your last name:')
    fullName = firstName+' '+lastName
    return(fullName)
}

function greesUser()
{
    alert('Wellcome, '+f_name()+'!')
}