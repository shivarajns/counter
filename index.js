const display=document.querySelector(".num");
const previousdisplay=document.getElementById("previous");

let count=0;
let previous=0;

function displayupdate() {
    display.value=count;
}


function increment(){
    previous = count;
    count++;
    displayupdate()
    previousdisplay.innerHTML = previous

}

function decrement() {
    if (count>0){
    previous = count ;
    count--;
    displayupdate();
    previousdisplay.innerHTML = previous;}
}

function reset() {
    if (count>0){
    count = 0;
    displayupdate();
    previousdisplay.innerHTML = previous;}
    else{
        previousdisplay.innerHTML = "0"
    }
}

document.getElementById("increment").onclick = increment
document.getElementById("decrement").onclick = decrement
document.getElementById("reset").onclick = reset

displayupdate()

