<?php
	//echo $_GET["variable"];
	//echo '{"resultat" : "'.$_GET["variable"].'"}';
	header('Content-Type: application/json');
	echo(json_encode('{"prop1":"val1", "prop2":"val2"}');
?>
