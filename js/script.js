let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let weightValue = document.querySelector("#weight-val");
let heightVal = document.querySelector("#height-val");
let result = document.querySelector("#result");
let category = document.querySelector("#category");

function bmiCalculator() {
    let weightData = weight.value;
    let heightData = height.value;
    weightValue.innerHTML = weightData + " kg";
    heightVal.innerHTML = heightData + " cm";
    let bmiRange = (weightData / Math.pow(heightData / 100, 2)).toFixed(2);
    result.innerHTML = bmiRange;
    if (bmiRange < 18.5) {
        category.innerHTML = "Underweight";
    } else if (bmiRange >= 18.5 && bmiRange < 25) {
        category.innerHTML = "Normal weight";
    } else if (bmiRange >= 25 && bmiRange < 30) {
        category.innerHTML = "Overweight";
    } else {
        category.innerHTML = "Obese";
    }
}

weight.addEventListener("input", bmiCalculator);
height.addEventListener("input", bmiCalculator);
