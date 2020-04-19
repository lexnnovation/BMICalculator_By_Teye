function BMI() {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let bmiRaw = weight / (((height / 100) * height) / 100);
  let bmiround = bmiRaw.toFixed(2);

  document.querySelector("#result").innerHTML = `Your BMI is ${bmiround}`;
}
