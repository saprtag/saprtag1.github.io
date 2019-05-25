console.clear;
var hover = document.getElementsByClassName("boding")[0];

document.getElementsByClassName('boding')[0].onclick = function(){
  hover.classList.toggle('hot');
  console.log("hot");
  
}
