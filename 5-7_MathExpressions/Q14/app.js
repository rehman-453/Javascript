/*
Q14. What will be the output in variables a, b & result after execution of the following script:
          var a = 2, b = 1;          
          var result = --a   -   --b   +   ++b  +   b--; 
    Explain the output at each stage:          
          --a;
          --a   -   --b;
          --a   -   --b   +   ++b;
          --a   -   --b   +   ++b  +   b--; 
*/

var a, b, result
a = 2
b = 1
document.write("<u><b>Step#1:</b></u> --a")
document.write("<br>")
document.write("a = "+ a)
document.write("<br>")
document.write("b = "+ b)
result = --a
document.write("<br>")
document.write("result = "+ result)
document.write("<br><br>")


a = 2
b = 1
document.write("<u><b>Step#2:</b></u> --a   -   --b   ")
document.write("<br>")
document.write("a = "+ a)
document.write("<br>")
document.write("b = "+ b)
result = --a   -   --b   
document.write("<br>")
document.write("result = "+ result)
document.write("<br><br>")

a = 2
b = 1
document.write("<u><b>Step#3:</b></u> --a   -   --b   +   ++b")
document.write("<br>")
document.write("a = "+ a)
document.write("<br>")
document.write("b = "+ b)
result = --a   -   --b   +   ++b   
document.write("<br>")
document.write("result = "+ result)
document.write("<br><br>")

a = 2
b = 1
document.write("<u><b>Step#4:</b></u> --a   -   --b   +   ++b  +   b--")
document.write("<br>")
document.write("a = "+ a)
document.write("<br>")
document.write("b = "+ b)
result = --a   -   --b   +   ++b  +   b--   
document.write("<br>")
document.write("result = "+ result)
document.write("<br><br>")