function but(val){
 document.getElementById("input").value+=val
}
function clr(){
   document.getElementById("input").value="";
}
function del(){
   var value = document.getElementById("input").value;
   document.getElementById("input").value = value.substr(0, value.length - 1); //will remail 0 to value.length-1 in substr
}
function equal(){
   let x = document.getElementById("input").value
   let y = eval(x)
   document.getElementById("input").value = y

}