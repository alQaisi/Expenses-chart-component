const shapes=document.querySelectorAll(".shape");
shapes.forEach(shape=>{
    shape.addEventListener("click",selectDay);
});
function selectDay(evt){
    let active=document.querySelector(".active");
    active.classList.toggle("active");
    active=evt.target;
    this.classList.toggle("active")
}