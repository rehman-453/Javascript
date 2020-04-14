/*
Q8. You have an array 
    A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an array. 
After searching, prompt the user whether the given item is found in the list or not. 
*/

var A = ["cake", "apple pie", "cookie", "chips", "patties"]
matchFound = false
item  = prompt("Wellcome to ABC Bakery. What do you want to order Sir/Madam?")
for(var i=0; i<A.length; i++)
{
    if(item === A[i])
    {
        matchFound = true
        break
    }
}
if(matchFound == true)
{
    document.write(item +" is <b>available</b> at index "+ i +" in our bakery")
}
else
{
    document.write("We are sorry. "+ item +" is <b>not available</b> in our bakery")    
}