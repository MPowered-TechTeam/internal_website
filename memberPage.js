
function getDataAndParse(idName) {
	var data = document.getElementById(idName).innerHTML;
	var table = data.split("\n");

	for (var i = 0; i < table.length; i++) {
		table[i].split(",");
	}

	return table;
}
