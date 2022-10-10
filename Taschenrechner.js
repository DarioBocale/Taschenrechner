function addNumber(number) {
    let input = document.getElementById("eingabefeld");
    if(input.value === "0"){
        input.value = "";
    }
    input.value = input.value + number
}

function addOperation(operation) {
    let input = document.getElementById("eingabefeld");
    input.value = input.value + " " +  operation + " ";
}

function clearText() {
    document.getElementById("eingabefeld").value = "0";
}

function calculate() {

    let input = document.getElementById("eingabefeld");
    let calculation;
    try{
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error!"
        setTimeout(clearText, 1500);
    }
}