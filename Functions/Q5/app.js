/*
Q5. Calculator: Write a function that takes three arguments num1, num2 & operator & 
    compute the desired operation. Return and show the desired result in your browser.
*/

Calculator()

function Calculator()
{
    num1 = parseInt(prompt('Enter first number'))
    num2 = parseInt(prompt('Enter second number'))
    operator = prompt('Enter operation you want to perform')
    if(operator == '+')
    {
        ans = addition(num1,num2)
        document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
    }
    else if(operator == '-')
    {
        ans = subtraction(num1,num2)
        document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
    }
    else if(operator == '*')
    {
        ans = multiplication(num1,num2)
        document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
    }
    else if(operator == '/')
    {
        ans = division(num1,num2)
        document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
    }
    else
    {
        document.write('Invalid operator')
    }
}

function addition(a,b)
{
    add = a + b
    return(add)
}

function subtraction(a,b)
{
    sub = a - b
    return(sub)
}

function multiplication(a,b)
{
    mul = a * b
    return(mul)
}

function division(a,b)
{
    div = a / b
    return(div)
}