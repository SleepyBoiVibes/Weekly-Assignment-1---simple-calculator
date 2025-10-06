let inputs = [];  

// inputing numbers and operators
function press(value) {
    inputs.push(value);
    document.getElementById("display").innerText = inputs.join("");
}

// calculating equations
function calculate() {
    let expression = inputs.join("");
    let result = eval(expression);   
    document.getElementById("display").innerText = result;
    inputs = [result]; 
}

//clearing equations
function clearDisplay() {
    inputs = [];
    document.getElementById("display").innerText = "0";
}
