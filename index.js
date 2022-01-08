const shar = document.querySelector(".content-avatar")

let open = false

function share(){
    open = !open;
    if (open){
        shar.classList.remove("off");
        shar.classList.add("on");
    }else{
        shar.classList.add("off")
        shar.classList.remove("on")
    }
}