const baseInput = document.querySelector(".input-base");
const heightInput= document.querySelector(".input-height");
const checkBtn = document.querySelector("#calculate-area-btn");
const outputEl = document.querySelector("#output");

checkBtn.addEventListener("click",() => {
    const base = baseInput.value;
    const height = heightInput.value;

    const areaOfTriangle = 0.5 * base * height;

    console.log(areaOfTriangle);

    outputEl.innerText = "Area of the Triangle is : " + areaOfTriangle + ".";

});