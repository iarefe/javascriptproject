// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    event.preventDefault();
// Your code goes here!
    var height = document.GetElementById("inputHeight").value;
    var width = document.GetElementById("inputWidth").value;
    var tableCanvas = document.GetElementById("pixelCanvas");

    tableCanvas.innerHTML = "";

    for (var i = 0; i < height; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < width; j++) {
            var cell = document.createElement("td");
            row.appendchild(cell);
        }
        tableCanvas.appendchild(row);
    }
}
function colorCell(event) {
    if (event.target.nodeName == "TD") {
        var pickedColor = document.GetElementById("colorPicker").value;
        event.target.style.backgroundColor=pickedColor;
    }
}