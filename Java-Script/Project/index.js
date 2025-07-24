var rangeSlider = document.getElementById("rangeSlider");
var rangeLabel = document.getElementById("abd");
var passwordOutput = document.getElementById("passwordOutput");

var uppercaseCheckbox = document.getElementById("uppercase");
var lowercaseCheckbox = document.getElementById("lowercase");
var numberCheckbox = document.getElementById("numbers");
var symbolCheckbox = document.getElementById("symbols");

var generateButton = document.getElementById("generateBtn");
var copyButton = document.getElementById("copyBtn");

let passwordLength = rangeSlider.value;

rangeSlider.addEventListener("input", function () {
  rangeLabel.textContent = rangeSlider.value;
  passwordLength = rangeSlider.value;
});

let generatedPassword = "";

generateButton.addEventListener("click", () => {
  let characterPool = [];
  generatedPassword = "";

  if (uppercaseCheckbox.checked) {
    characterPool = characterPool.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  }

  if (symbolCheckbox.checked) {
    characterPool = characterPool.concat([
      "~", "@", "#", "$", "%", "^", "&", "*",
      "(", ")", "_", "+", "=", "{", "}"
    ]);
  }

  if (numberCheckbox.checked) {
    characterPool = characterPool.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  }

  if (lowercaseCheckbox.checked) {
    characterPool = characterPool.concat([
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z"
    ]);
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool[randomIndex];
  }

  passwordOutput.value = generatedPassword;
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(generatedPassword);
});
