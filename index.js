function getInputValue(){
    let input = event.target.innerText;
    console.log(input);
    printValue(input);
}

//we will make a function that will print the values inside our field
function printValue(val){
    let out = document.querySelector("#result");
    let current = out.innerHTML;

    if(out.innerHTML == "0"){
        if(val !="C" && val != "DEL"){
            out.innerHTML = "";
            out.innerHTML += val;
        }
    }
    else{
        if(val == "DEL"){
            out.innerHTML = current.slice(0, -1);    //the slice() method allows us to remove a part of the string
            if(out.innerHTML.length <=1){
                out.innerHTML = "0";
            }
        }

        if(val != "C" && val != "DEL" && val != "="){
            out.innerHTML += val;
        }

        if(val == "C"){
            out.innerHTML = "0";
        }

        //Now we will apply the formula
        //for this we will use the eval() that return a result of a mathematic formula

        if(val == "="){
            let res = out.innerHTML;
            out.innerHTML = eval(res);
        }
    }
}

let buttons = document.getElementsByTagName('button');
for(let i=0; i<buttons.length; i++){
    buttons[i].setAttribute("onclick", "getInputValue()"); //with this we will add the onclick method to all the buttons
}