var email = document.getElementById('emailId')
var pasword = document.getElementById('password')
var authMessage = document.getElementById('authMessage')

function signup()
{
    var users = localStorage.getItem('users')
    var userExist = false

    if (users === null)
    {
        users = []
    }
    else
    {
        users = JSON.parse(users)
    }
    var user = {
        email: email.value,
        password: password.value
    }
    for(var i=0; i<users.length; i++)
    {
        if(users[i].email === email.value)
        {
            userExist = true
        }
    }
    if (userExist === true)
    {
        authMessage.innerHTML = 'user already exist'
    }
    else
    {
        users.push(user)
        users = JSON.stringify(users)
        localStorage.setItem('users',users)

        email.value = ''
        password.value = ''

        authMessage.innerHTML = 'Successfully Signup'
    }
}

function login()
{
    var users = localStorage.getItem('users')
    if(users === null)
    {
        users = []
    }
    else
    {
        users = JSON.parse(users)
    }
    var authantication = false

    for(var i=0; i<users.length; i++)
    {
        if(users[i].email === email.value)
        {
            authantication = true
        }        
    }
    if(authantication == false)
    {
        authMessage.innerHTML = 'Login Failed'
    }
    else
    {
        authMessage.innerHTML = 'Login Successfully'
        email.value = ''
        password.value = ''
    }
}