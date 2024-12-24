// function restart() {
//     window.location = "index.html"
// }
function Onclick(input){
   let display= document.getElementById('display');
   display.value += input;
 }
 function Calculate(){
try{
    display.value= eval(display.value)
}  catch(error)
{
    display.value="Error"

}  
 }
 function restart(){
    display.value="";
 }
function del(){
    remove = display.value.substring(0, display.value.length-1);
    display.value=remove;
}
