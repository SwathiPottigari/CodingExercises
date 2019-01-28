// JavaScript source code
alert("script called");
var storage = 0;
function addNumbers() {
    var a = parseInt(document.getElementById("number").value);
    var b = 0;
    if (document.getElementById("result").value === "") {
        //alert("Please clear the value before you perform another operation");
        storage = a;
        document.getElementById("result").value = storage;
    }
    else {
        b = storage;
        storage = storage + a;
    }
    document.getElementById("result").value = b + " + " + a + "=" + storage;
}

function mulNumbers() {
    var a = parseInt(document.getElementById("number").value);
    var b = 0;
    if (document.getElementById("result").value === "") {
        storage = a * b;
        //alert("Please clear the value before you perform another operation");
    }
    else {
        b = storage;
        storage = storage * a;
    }
    document.getElementById("result").value = b + " * " + a + "=" + storage;
}

function divideNumbers() {
    var a = parseInt(document.getElementById("number").value);
    var b = 0;
    if (document.getElementById("result").value === "") {
        //alert("Please clear the value before you perform another operation");
        storage =;
    }
    else {

        document.getElementById("result").value = a + " / " + b + "=" + c;
    }
}
function clearText() {
    if (document.getElementById("result").value === "") {
        alert("There is nothing to be cleared");
    }
    else {
        document.getElementById("firstNumber").value = "";
        document.getElementById("secondNumber").value = "";
        document.getElementById("result").value = "";
    }
}