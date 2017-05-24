
$(document).ready( function() {

	$( "#req_get" ).click(function() {
	
		/*$.get('index.php?name=re&firstname=te', function(data) {
			console.log(data);
		});
	
	});*/
	
	$.getJSON(
	
		'index3.php',
		{
			"name" : "re",
			"firstname" : "re"
		},
		function(data) {
			console.log(data);
		});
	
});

});