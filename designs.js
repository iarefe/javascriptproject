// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    event.preventDefault();
// Your code goes here!
    var height = decument.GetElementById("inputHeight").value;
    var width = decument.GetElementById("inputWidth").value;
    var TableCanvas = decument.GetElementById("pixelCanvas");

    TableCanvas.innerHTML = "";

    for (var i = 0; i < height; i++) {
        var row = decument.createElement("tr");
        for (var j = 0; j < width; j++) {
            var cell = decument.createElement("td");
            row.appendchild(cell);
        }
        TableCanvas.appendchild(row);
    }
}
function colorCell(event) {
    if (event.target.nodeName == "TD") {
        var pickedColor = decument.GetElementById("colorPicker").value;
        event.target.style.backgroundColor=pickedColor;
    }
}