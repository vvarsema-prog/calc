let backspace = () =>{
    let gamosax = document.getElementById("gamosax").innerHTML = newnumber;
    
    let newnumber = gamosax.slice(0,gamosax.length(-1));
}
document.getElementById("gamosax").addEventListener('click',backspace);