const  body=document.querySelector(".cointainer");
const Modal=document.querySelector(".CardModal");
function showModal(){
    console.log("Running")
Modal.style.transform="scale(1)"
body.style.filter = 'blur(10px)';

}
function closeModal(){
    console.log("Running")
Modal.style.transform="scale(0)"
body.style.filter = 'blur(0px)';
}


// function closing(){
//     console.log("Running")
//     Modal.style.transform="scale(0)"
//     body.style.filter = 'blur(0px)';

// }