var closeIcon=document.querySelector(".close-icon");
var modal=document.querySelector(".modal");
var closeBtn=document.querySelector(".close-btn");
var openBtn=document.querySelector(".open-modal");

closeIcon.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

openBtn.addEventListener("click",()=>{
    modal.style.display="block";
})

function closeModal(){
    modal.style.display="none";
}


