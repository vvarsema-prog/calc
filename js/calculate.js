let calculate = () => {
    let gamosax = document.getElementById("gamosax").innerHTML;
    let number1,number2,opperator,sum;
    console.log(number1,number2);
    
    if(gamosax.includes){

        opperator = "+"
        number1 =parseFloat(gamosax.slice(0, gamosax.indexOf("+"))); 
        number2 =parseFloat(gamosax.slice( gamosax.indexOf("+")+1, gamosax.length)); 
        sum = number1 + number2; 
    }
    else if(gamosax.includes("-")){
         opperator = "-"
        number1 =parseFloat(gamosax.slice(0, gamosax.indexOf("-"))); 
        number2 =parseFloat(gamosax.slice( gamosax.indexOf("-")+1, gamosax.length)); 
        sum = number1 - number2; 
    }
     else if(gamosax.includes("*")){
         opperator = "*"
        number1 =parseFloat(gamosax.slice(0, gamosax.indexOf("*"))); 
        number2 =parseFloat(gamosax.slice( gamosax.indexOf("*")+1, gamosax.length)); 
        sum = [number1 * number2]/100; 
    }
    else if(gamosax.includes("/")){
         opperator = "/"
        number1 =parseFloat(gamosax.slice(0, gamosax.indexOf("/"))); 
        number2 =parseFloat(gamosax.slice( gamosax.indexOf("/")+1, gamosax.length)); 
        
    }

    document.getElementById("pasuxi").innerHTML = sum;
    }
document.getElementById("equals").addEventListener('click',calculate);


let ricxvi = "123+23"
console.log(ricxvi.indexOf("3"));
console.log(ricxvi.slice(0,3));
console.log(ricxvi.slice(ricxvi.indexOf,ricxvi.length));


