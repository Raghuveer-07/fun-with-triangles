const baseInput = document.querySelector(".input-base");
const heightInput = document.querySelector(".input-height");
const checkBtn = document.querySelector("#calculate-area-btn");
const outputEl = document.querySelector("#output");

checkBtn.addEventListener("click", () => {
    const base = baseInput.value;
    const height = heightInput.value;
    if (base > 0 && height > 0) {
        const areaOfTriangle = 0.5 * base * height;

        console.log(areaOfTriangle);

        outputEl.innerText = "Area of the Triangle is : " + areaOfTriangle + " sq cm.";
    }
    else{
        outputEl.innerText = "Enter all the fields  with value > 0.";
    }


});