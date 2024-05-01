function insert_Row() {

	let table = document.getElementById("sampleTable");
	// var table = document.getElementById("sampleTable");
	
	 var newRow = table.insertRow(0);

    // Insert cells into the new row
    var leftCell = newRow.insertCell(0);
    var rightCell = newRow.insertCell(1);

    // Set the content of the cells
    leftCell.innerHTML = "New Cell1";
    rightCell.innerHTML = "New Cell2";
  
}
