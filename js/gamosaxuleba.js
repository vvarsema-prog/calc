let creatgamosax =( button) =>{
    let gamosax = document.getElementById("gamosax").innerHTML;

    if(gamosax.length <30){

        console.log(button);
        document.getElementById("gamosax").innerHTML += button.innerHTML;
    
    
        gamosax +- button.innerHTML;
    
        document.getElementById("gamosax").innerHTML + gamosax;
    }

    

    
}

let button = document.getElementsByClassName("action");
for(i=0; i<button.length; i++){
button[i].addEventListener('click', ()=>{creatgamosax(this)} );
}

