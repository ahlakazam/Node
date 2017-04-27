var previousElement = null;
var previousElementBackGround = null;

function selection(event) {
  var element = event.target;
  if (previousElement != element)
    previousElementBackGround = element.style.backgroundColor;
  element.style.backgroundColor = "red";
  if (previousElement != null)
    previousElement.style.backgroundColor = previousElementBackGround;
  previousElement = element;

}

function selection2(event) {
  if (!document.getElementById("frameInsert").contains(event.target)) {
    var element = event.target;
    if (previousElement != element)
      previousElementBackGround = element.style.backgroundColor;
    element.style.backgroundColor = "blue";
    if (previousElement != null)
      previousElement.style.backgroundColor = previousElementBackGround;
    previousElement = element;
  }
}

function insertB(type) {
  var insert = document.getElementById("toInsert");
  previousElement.before("<"+type+">"+insert.value+"</"+type+">");
}

function initSelection () {
  document.body.addEventListener("click", selection2, false);
}
