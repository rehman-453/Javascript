function createTable() 
{
    rows = window.prompt("Input number of rows")
    columns = window.prompt("Input number of columns")
    for (var r = 0; r < parseInt(rows, 10); r++) 
    {
        var x = document.getElementById('myTable').insertRow(r)
        for (var c = 0; c < parseInt(columns, 10); c++) 
        {
            var y = x.insertCell(c)
            y.innerHTML = "Row-" + r + "<br> Column-" + c
        }
    }
}