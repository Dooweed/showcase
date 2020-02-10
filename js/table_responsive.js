
var tables = document.getElementsByClassName("tableClass");
window.addEventListener("resize", checkWidth)
function checkWidth(argument = 0) {
  if(argument === 0)
    width = window.innerWidth
  else
    width = argument.srcElement.innerWidth

  if(width <= 800){
    for (var i = tables.length - 1; i >= 0; i--) {
      tables[i].classList.add("table-responsive")
    }
  }
  else {
    for (var i = tables.length - 1; i >= 0; i--) {
      tables[i].classList.remove("table-responsive")
    }
  }
}
checkWidth()