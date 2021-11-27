document.getElementById("btn").addEventListener("click", function (event) {
  const currentField = document.getElementById("current-operands");
  const totalField = document.getElementById("total");
  const lastElement = currentField.value.slice(-1);
  if (event.target.innerText == "AC") {
    currentField.value = 0;
    totalField.value = "";
  } else if (event.target.innerText == "DEL") {
    const text = currentField.value;
    currentField.value = text.slice(0, -1);
  } else if (
    currentField.value == "0" &&
    typeof Number(event.target.innerText) == "number"
  ) {
    if (event.target.innerText.length > 3) {
      currentField.value = 0;
      totalField.value = "";
    } else
      currentField.value =
        Number(currentField.value) + Number(event.target.innerText);
    if (isNaN(currentField.value) && event.target.innerText != "=") {
      currentField.value = "0" + event.target.innerText;
    } else if (isNaN(currentField.value) && event.target.innerText == "=") {
      currentField.value = 0;
    }
  } else if (isNaN(Number(lastElement)) && event.target.innerText == "=") {
    currentField.value = "";
    totalField.value = "Syntax error";
  } else if (event.target.innerText == "=") {
    try {
      totalField.value = eval(currentField.value);
    } catch (error) {
      totalField.value = "Syntax error";
    }
    currentField.value = "";
    if (!isFinite(totalField.value) && totalField.value != "Syntax error") {
      totalField.value = "Math Error";
    }
  } else if (event.target.innerText.length < 3) {
    const number = currentField.value;
    currentField.value = number + event.target.innerText;
  }
});
