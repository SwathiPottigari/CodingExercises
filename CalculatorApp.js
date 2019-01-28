// JavaScript source code
var storage = 0;
var display = "";
var resultelement;

function initializeGloabls() {
    resultelement = document.getElementById("result");
    //alert(resultelement);
}
function addNumbers() {
    var a = parseInt(document.getElementById("number").value);
    var b = 0;
    document.getElementById("number").value = "";
    if (resultelement.innerText === "") {      
        storage = a;
        display = storage;
        resultelement.innerHTML = display;
            
    }
    else {
        b = storage;
        display = display +"+"+ a;
        storage = storage + a;
        resultelement.innerHTML = display + "</br>" +"<b>" + storage +"</b>";
    }
    
}

function mulNumbers() {
    var a = parseInt(document.getElementById("number").value);
    var b = 0;
    document.getElementById("number").value = "";
    if (resultelement.innerText === "") {
        storage = a;
        display = storage;
        resultelement.innerHTML = display;
    }
    else {
        b = storage;
        display = display + "*" + a;
        storage = storage * a;
        resultelement.innerHTML = display + "</br>" + "<b>" + storage + "</b>";
    }
   
}

function divideNumbers() {
    var a = parseInt(document.getElementById("number").value);
    var b = 0;
    document.getElementById("number").value = "";
    
    if (resultelement.innerText === "") {
        storage = a;
        display = storage;
        resultelement.innerHTML = display;
    }
    else {        
        b = storage;        
        display = display + "/" + a;        
        storage = storage / a;        
        resultelement.innerHTML = display + "</br>" + "<b>" + storage + "</b>";
    }
}
function clearText() {
        
        document.getElementById("number").value = "";
        resultelement.value = "";
    
}