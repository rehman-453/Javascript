/*
Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
Store the following in variables 
    a. Price of item 1 
    b. Price of item 2 
    c. Ordered quantity of item 1  
    d. Ordered Quantity of item 2 
    e. Shipping charges 
Compute the total cost & show the receipt in your browser. 
*/

document.write("<b>Shopping Cart</b>")
var price_of_item1 = 560
var quantity1 = 2
var cost1 = price_of_item1 * quantity1

var price_of_item2 = 200
var quantity2 = 5
var cost2 = price_of_item2 * quantity2

var Shipping_charges = 150
var total_cost = cost1 + cost2 + Shipping_charges

document.write("<br><br>")
document.write("Price of item 1 is "+ price_of_item1)

document.write("<br>")
document.write("Quantity of item 1 is "+ quantity1)

document.write("<br>")
document.write("Price of item 2 is "+ price_of_item2)

document.write("<br>")
document.write("Quantity of item 2 is "+ quantity2)

document.write("<br><br>")
document.write("Shipping charges "+ Shipping_charges)

document.write("<br><br>")
document.write("Total cost of your order is "+ total_cost +" PKR")