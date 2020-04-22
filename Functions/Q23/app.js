/*
Q23. Write a JavaScript function which accepts an argument and returns the type. 
    Note : There are six possible values that typeof returns: object, boolean, function, 
    number, string, and undefined.
*/
var A = [1,2,3,'a','b','c',true,false]
document.write('A =['+ A +']<br>')
document.write('Type of A: '+ check_type(A) +'<br><br>')

var B = true
document.write('B = '+ B +'<br>')
document.write('Type of B: '+ check_type(B) +'<br><br>')

var C = alert()
document.write('C = alert() <br>')
document.write('Type of C: '+ check_type(alert) +'<br><br>')

var D = 123
document.write('D = '+ D +'<br>')
document.write('Type of D: '+ check_type(D) +'<br><br>')

var E = 'sami'
document.write('E = '+ E +'<br>')
document.write('Type of E: '+ check_type(E) +'<br><br>')

var F 
document.write('Type of F: '+ check_type(F))


function check_type(arg)
{
    return(typeof arg)
}