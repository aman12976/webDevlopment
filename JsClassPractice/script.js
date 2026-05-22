const display = document.querySelector(".display span");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;


    if (value === "AC") {
      input = "";
      display.innerText = "0";
    }

    // C: Delete last character
    else if (value === "C") {
      input = input.slice(0, -1);
      display.innerText = input || "0";
    }

   
    else if (value === "=") {
      try {
        input = eval(input).toString();
        display.innerText = input;
      } catch {
        display.innerText = "Error";
        input = "";
      }
    }

    // Normal button press
    else {
      input += value;
      display.innerText = input;
    }
  });
});