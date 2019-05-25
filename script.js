console.clear;
var hover = document.getElementsByClassName("boding")[0];
var arrow = document.getElementsByClassName("arrow")[0];
var span = document.getElementById('inf');
var block = document.getElementById("block");

document.getElementsByClassName('arrow')[0].onclick = function(){
  hover.classList.toggle('hot');
  console.log("hot");
  arrow.classList.toggle("rotate");
  console.log('rotate');
  
}
span.onclick = function(){
  block.classList.toggle("transform");
  console.log('transform');
  span.classList.toggle("text")
}
