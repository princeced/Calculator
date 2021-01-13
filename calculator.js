function calculator() {
    let numberOne;
    let numberTwo;

    numberOne = document.getElementById("result").value
    numberTwo = eval(numberOne);
    document.getElementById("result").value = numberTwo;
}

function showValue(values) {
    document.getElementById("result").value += values;
}

function clear_input() {
    let num = document.getElementById("result");
    console.log(num);
    document.getElementById("result").value = "";
}