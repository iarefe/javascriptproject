// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    //This code is to stop the page refresh
    event.preventDefault();
    // These codes define and fetch information from IndexFile
    var Gridheight = document.getElementById("inputHeight").value;
    var Gridwidth = document.getElementById("inputWidth").value;
    var GridCanvas = document.getElementById("pixelCanvas");
    // to clear evry thing in Grid
    GridCanvas.innerHTML = "";
    // to creat Grid
    for (var i = 0; i < Gridheight; i++) {
        var rows = document.createElement("tr");
        for (var j = 0; j < Gridwidth; j++) {
            var cells = document.createElement("td");
            rows.appendChild(cells);
        }
        GridCanvas.appendChild(rows);
    }
}
// to coloring the Grid TD
function colorCell(event) {
    // To select the coloring area accurately
    if (event.target.nodeName == "TD") {
        var pickedColor = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor=pickedColor;
    }
}