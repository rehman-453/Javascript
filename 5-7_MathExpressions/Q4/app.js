/*
Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the 
    cost of buying 5 tickets to a movie. Example output: 
*/

cost = "600PKR"
cost = parseInt(cost)
no_of_tickets = 5
total_cost = cost * no_of_tickets
document.write("Total cost to buy "+ no_of_tickets +" tickets to a movie is "+ total_cost +" PKR")