document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculateCalories);
});

function calculateCalories() {
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const pal = parseFloat(document.getElementById("pal").value);

  let basicCalories = 0;
  if (gender === "mann") {
    basicCalories = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
  } else if (gender === "frau") {
    basicCalories = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }

  const totalCalories = basicCalories * pal;
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Ihr täglicher Kalorienbedarf beträgt: ${totalCalories.toFixed(
    2
  )} Kilokalorien.`;
}
