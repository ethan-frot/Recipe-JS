// Variables
let nbUsers = 1;
let appleJuice = 100;
let sodaVolume = 2;
let sugarQuantity = 4;
let limeQuantity = 24;

// Query selector
const moreButton = document.querySelector(".addItem");
const input = document.querySelector("input");
const removeButton = document.querySelector(".removeItem");
const appleJuiceHTML = document.querySelector(".apple-juice-volume");
const sodaVolumeHTML = document.querySelector(".soda-volume");
const sugarQuantityHTML = document.querySelector(".sugar-quantity");
const limeQuantityHTML = document.querySelector(".lime-quantity");

// Valeurs par défaut

input.value = nbUsers;
appleJuiceHTML.textContent = appleJuice + " ml";
sodaVolumeHTML.textContent = sodaVolume + " dash";
sugarQuantityHTML.textContent = sugarQuantity + " stp";
limeQuantityHTML.textContent = limeQuantity + " wedge";

// Button action

moreButton.addEventListener("click", function () {
  nbUsers++;
  appleJuice += 100;
  sodaVolume += 2;
  sugarQuantity += 4;
  limeQuantity += 24;

  input.value = nbUsers;
  appleJuiceHTML.textContent = appleJuice + " ml";
  sodaVolumeHTML.textContent = sodaVolume + " dash";
  sugarQuantityHTML.textContent = sugarQuantity + " stp";
  limeQuantityHTML.textContent = limeQuantity + " wedge";
});

removeButton.addEventListener("click", function () {
  if (nbUsers > 1) {
    nbUsers--;
    appleJuice -= 100;
    sodaVolume -= 2;
    sugarQuantity -= 4;
    limeQuantity -= 24;

    input.value = nbUsers;
    appleJuiceHTML.textContent = appleJuice + " ml";
    sodaVolumeHTML.textContent = sodaVolume + " dash";
    sugarQuantityHTML.textContent = sugarQuantity + " stp";
    limeQuantityHTML.textContent = limeQuantity + " wedge";
  }
});

// Input action

input.addEventListener("change", function (event) {
  nbUsers = event.target.value;
  appleJuice = nbUsers * 100;
  sodaVolume = nbUsers * 2;
  sugarQuantity = nbUsers * 4;
  limeQuantity = nbUsers * 24;

  appleJuiceHTML.textContent = appleJuice + " ml";
  sodaVolumeHTML.textContent = sodaVolume + " dash";
  sugarQuantityHTML.textContent = sugarQuantity + " stp";
  limeQuantityHTML.textContent = limeQuantity + " wedge";
});
