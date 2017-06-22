var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    console.log(xhr.responseText);
  }
};

$(document).ready(function() {
  $('#getAddress').click(function() {
    $.post("/perso/test", function(data) {
      console.log(data);
      });
  });
});
