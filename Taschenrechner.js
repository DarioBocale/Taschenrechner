function addNumber(number) {
    let input = document.getElementById("eingabefeld");
    input.value = input.value + number
}

function addOperation(operation) {
    let input = document.getElementById("eingabefeld");
    input.value = input.value + " " +  operation + " ";
}

function clearText() {
    document.getElementById("eingabefeld").value = "0";
    document.getElementById("ausgabefeld").value = "0";
}

function calculate() {
    let input = document.getElementById("eingabefeld");
    input.value = eval(input.value);
}