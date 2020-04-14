/*
Q8. Declare and Initialize an array and store available education qualifications in 
Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
Show the listed qualifications in your browser like:
*/

var degree = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
var j=0
document.write("<h3>Available Education Qualifications in Pakistan</h3>")

for(i=0; i<degree.length; i++)
{
    document.write('<br>'+ ++j +'. '+ degree[i])
}