const display = document.querySelector("#pp");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        const value = button.innerText;

        if(value === "AC"){
            expression = "";
            display.innerText = "0";
        }
        else if(value === "="){
            expression = eval(expression);
            display.innerText = expression;
        }
        else {
            expression += value;
            display.innerText = expression;
        }
    });
});