const angleInput = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");


function sumOfAngle(a1,a2,a3){
    const sum1 = a1+a2+a3;
    return sum1;
}

function isTriangle(){
    angle1=Number(angleInput[0].value);
    angle2=Number(angleInput[1].value);
    angle3=Number(angleInput[2].value);
    if  (angle1 && angle2 && angle3 ){
        const sumOftheAngles = sumOfAngle(angle1,angle2,angle3);

        if (sumOftheAngles===180){
            outputEl.innerText="Sum of the angles form a triangle"
        }
        else{
            outputEl.innerText="Sum of the angles do not form a triangle"
        }
        

    }
    else{
        outputEl.innerText="please fill all the angle fields"
    }
}

checkBtn.addEventListener('click',isTriangle);

