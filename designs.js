// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    event.preventDefault();
// Your code goes here!
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var tableCanvas = document.getElementById("pixelCanvas");

    tableCanvas.innerHTML = "";

    for (var i = 0; i < height; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < width; j++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        tableCanvas.appendChild(row);
    }
}
function colorCell(event) {
    if (event.target.nodeName == "TD") {
        var pickedColor = document.GetElementById("colorPicker").value;
        event.target.style.backgroundColor=pickedColor;
    }
}