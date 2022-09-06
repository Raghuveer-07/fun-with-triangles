const SideInputs = document.querySelectorAll(".input-side");
const checkBtn = document.querySelector("#hyptotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateHypotenuse(){
    const side1 = Number(SideInputs[0].value);
    const side2 = Number(SideInputs[1].value);
    if (side1>0 && side2>0){
        const sqSide1 = side1**2;
        const sqSide2 = side2**2;

        const sqHypotenuse = sqSide1 + sqSide2 ;

        const hypotenuse = Math.sqrt(sqHypotenuse);



        outputEl.innerText = "Length of the Hypotenuse is " + hypotenuse + ".";

    }

    else{
        outputEl.innerText = "Enter all the fields with >0";
    }
    
}


checkBtn.addEventListener("click",calculateHypotenuse);