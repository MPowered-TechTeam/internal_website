function build_table(table_data)
{
	var the_table = document.createElement('table');

	
	// Note, don't forget the var keyword!
	var tr, td;
	tr = document.createElement('th');
	td = document.createElement('td');
	td.appendChild(document.createTextNode("Name"));
	tr.appendChild(td);
    the_table.appendChild(tr);

	for (var j = 0; j < parseInt(table_data.length); j++)
	{
	    tr = document.createElement('tr');
		for (var i = 0; i < parseInt(table_data[j].length); i++) {
		    td = document.createElement('td');
		    td.appendChild(document.createTextNode(table_data[j][i]));
    	    tr.appendChild(td);
		}
	    the_table.appendChild(tr);
	}
	
	document.getElementById('member_table').appendChild(the_table);
	$('#member_table').sortTable({
          onCol: 1,
          keepRelationships: true
    });
}
