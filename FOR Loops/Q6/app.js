/*
Q6. Write a program to initialize an array of N items by using prompt. Where N is 
    number of items as entered by the user. 
*/

var items = []
var no_Of_Items = prompt("Enter number of items")

for(i=0; i<no_Of_Items; i++)
{
    items[i]= prompt("Enter value for index "+ i)
}

document.write("Number of items: "+ no_Of_Items)
document.write("<br>Items: <br>")

for(i=0; i<items.length; i++)
{
    document.write("<br>"+items[i])
}