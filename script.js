function reveal(event){
    event.target.previousElementSibling.style.clip = "rect(0px, "+(event.clientX-event.target.offsetLeft)+"px, 230px, 0px)";  
}