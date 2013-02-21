
function getDataAndParse(idName) {
	var data = document.getElementById(idName).innerHTML;
	data = data.split("\n");
	console.log(data);

	for (var i = 0; i < data.length; i++) {
		data[i] = data[i].split(",");
	}

	return data;
}
