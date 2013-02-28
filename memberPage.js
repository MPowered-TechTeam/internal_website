
function getDataAndParse(idName) {
	var data = document.getElementById(idName).innerHTML;
	data = data.split(";");
	console.log(data);

	for (var i = 0; i < data.length; i++) {
		data[i] = data[i].split(",");
		console.log("i = ", i);
		for (var j = 0; j < data[i].length; j++) {
			console.log(data[i][j]);
		}
	}
	return data;
}
