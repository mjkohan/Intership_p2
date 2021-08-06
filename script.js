function clearScreen() {
    document.getElementById('display').className = 'display';
    document.getElementById("display").value = "";
}

function updateMonitor(value) {
    if (document.getElementById('display').className == 'err-display') {
        clearScreen();
        document.getElementById('display').className = 'display';
    }
    document.getElementById('display').className = 'display';
    var tmp = document.getElementById("display").value;
    if (new String(tmp).charAt(new String(tmp).length - 1) == '0' && value != '.') {
        document.getElementById("display").value = value;
    } else {
        document.getElementById("display").value += value;
    }
}

function calculate() {
    var p = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(p);
    } catch (err) {
        document.getElementById('display').className = 'err-display';
        document.getElementById("display").value = "Enter a mathematical expression"
    }
}