var previousElement = null;
var previousElementBackGround = null;
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){ 
    maCallback(xhr.responseText);
  }
};

function maCallback(response){ 
  var h1 = document.createElement('h1'); 
  var text = document.createTextNode(eval('('+response+')')["resultat"]);
  h1.appendChild(text)
  document.body.appendChild(h1);
}

function sendReq1 () {
	xhr.open('get', "http://localhost/index3.php?variable="+document.getElementById("champ").value, true);
	xhr.send(null);
}

function sendReq2 () {
	xhr.open('post', "http://localhost/index2.php", true);
	xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
	xhr.send("variable="+document.getElementById("champ").value);
}	

function initSelection () {
	document.getElementById("req_get").addEventListener("click", sendReq1);
	document.getElementById("req_post").addEventListener("click", sendReq2);
}


