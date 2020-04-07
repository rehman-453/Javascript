/*
Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani 
Rupees. Perform all calculations in a single expression. 
(Exchange rates :  1 US Dollar  = 104 Pakistani Rupee  and  1 Saudi Riyal = 28 Pakistani Rupee) 
*/

var Dollars = 10
var dollar_in_Rupee = Dollars * 104
var Riyal = 25
var riyal_in_Rupee = Riyal * 28
var total = dollar_in_Rupee + riyal_in_Rupee
document.write("<b>Currency in PKR</b>")
document.write("<br><br>")
document.write("Total Currency in PKR : "+total)