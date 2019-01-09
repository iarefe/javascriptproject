// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    event.preventDefault();
// Your code goes here!
    var Gridheight = document.getElementById("inputHeight").value;
    var Gridwidth = document.getElementById("inputWidth").value;
    var tableCanvas = document.getElementById("pixelCanvas");

    tableCanvas.innerHTML = "";

    for (var i = 0; i < Gridheight; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < Gridwidth; j++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        tableCanvas.appendChild(row);
    }
}
function colorCell(event) {
    if (event.target.nodeName == "TD") {
        var pickedColor = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor=pickedColor;
    }
}