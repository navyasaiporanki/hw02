
// A JavaScript file that handles the execution logic of the calculator.


(function () { 
var initialDisplayValue = '0';
var operatorClicked = false;
//var currentValues = [];

var classNameList = document.getElementsByClassName("btnButtons");

for (var i = 0; i < classNameList.length; i++) {
    classNameList[i].addEventListener("click", AddDataEvents, false);
}

function AddDataEvents(event) {


    if (event.target.className === 'btnButtons') {
    
        if (initialDisplayValue === '0') {
            initialDisplayValue = event.target.innerText;
        } else {
            //  alert("else");
            initialDisplayValue = document.getElementById("displayTb").value + event.target.innerText;
        }
        // alert(initialDisplayValue);
        document.getElementById("displayTb").value = initialDisplayValue;
    }
    if (event.target.id == 'btnClear') {
        initialDisplayValue = '0';
        document.getElementById("displayTb").value = 0;
        currentValues = [];
        remainingValue = 0;
        operatorClicked = false;
        return;
    }

    var displayedValues = document.getElementById("displayTb").value;
    var currentValues = displayedValues.split(' ');

    if (currentValues.length == 3 && event.target.className === 'btnButtons btnOperator'
        && currentValues[2] === '') {

        var textInput = event.target.innerText;
        if (textInput === '+/=') {
            textInput = '+';
        }
        else if (textInput === '-') {
            var textDisplayed = document.getElementById("displayTb").value + textInput;
            document.getElementById("displayTb").value = textDisplayed;
            return;
        }
        var textDisplayed = currentValues[0] + ' ' + textInput + ' ';
        document.getElementById("displayTb").value = textDisplayed;
        return;
    }

    if (event.target.id == 'btnPlus') {

       // debugger;
        if (initialDisplayValue != '0') {
           // alert("inside");

            var displayedValues = document.getElementById("displayTb").value;
            var currentValues = displayedValues.split(' ');

         
           // alert(currentValues.length);
            if (currentValues[1] == '-') {
                document.getElementById("displayTb").value = parseFloat(currentValues[0]) - parseFloat(currentValues[2]);
                operatorClicked = false;
            }
            if (currentValues[1] == '/') {
                document.getElementById("displayTb").value = parseFloat(currentValues[0]) / parseFloat(currentValues[2]);
                operatorClicked = false;
            }
            else if (currentValues[1] == 'X') {
                document.getElementById("displayTb").value = parseFloat(currentValues[0]) * parseFloat(currentValues[2]);
                operatorClicked = false;
            }
            else if (currentValues.length == 1) {
                initialDisplayValue = document.getElementById("displayTb").value + " + ";
                document.getElementById("displayTb").value =
                    initialDisplayValue
            }
            else if (currentValues[1] == '+' && currentValues.length == 3) {
                var valueGot = parseFloat(currentValues[0]) + parseFloat(currentValues[2]);
                document.getElementById("displayTb").value = valueGot;
                operatorClicked = false;
            }

        }
    }

    if (event.target.id == 'btnMinus') {

        var displayedValues = document.getElementById("displayTb").value;
        var currentValues = displayedValues.split(' ');

        if (initialDisplayValue === '0') {
            initialDisplayValue = '-';
            document.getElementById("displayTb").value = initialDisplayValue;
            return;
        }
        if (initialDisplayValue != '0' && !operatorClicked && currentValues.length < 3) {

            initialDisplayValue = document.getElementById("displayTb").value + " - ";
            document.getElementById("displayTb").value =
                initialDisplayValue

            operatorClicked = true;
        }
        //alert(currentValues.length);
        if (currentValues.length == 3) {
            doOperation(event);
        }
    }
    if (event.target.id == 'btnMultiply') {

        //alert("inside multiply");
        var displayedValues = document.getElementById("displayTb").value;
        var currentValues = displayedValues.split(' ');
        if (initialDisplayValue != '0' && !operatorClicked && currentValues.length < 3) {

            initialDisplayValue = document.getElementById("displayTb").value + " X ";
            document.getElementById("displayTb").value =
                initialDisplayValue

            operatorClicked = true;
        }
        if (currentValues.length == 3) {
            doOperation(event);
        }
    }
    if (event.target.id == 'btnDivide') {

        var displayedValues = document.getElementById("displayTb").value;
        var currentValues = displayedValues.split(' ');
        if (initialDisplayValue != '0' && !operatorClicked && currentValues.length < 3) {

            initialDisplayValue = document.getElementById("displayTb").value + " / ";
            document.getElementById("displayTb").value =
                initialDisplayValue
            operatorClicked = true;
        }

        if (currentValues.length == 3) {
            doOperation(event);
        }
    }
}



function doOperation(event) {
   // alert("doOperation");
    var displayedValues = document.getElementById("displayTb").value;
    var currentValues = displayedValues.split(' ');
     //alert(currentValues.length);
    if (currentValues[1] == '-') {
        var newValue = (parseFloat(currentValues[0]) - parseFloat(currentValues[2])) + ' ' + event.target.innerText + ' ';
        
        document.getElementById("displayTb").value = newValue;
        operatorClicked = false;
    }
    else if (currentValues[1] == '/') {
       // alert("inside divide");
        var newValue = (parseFloat(currentValues[0]) / parseFloat(currentValues[2])) + ' ' + event.target.innerText + ' ';

        document.getElementById("displayTb").value = newValue;
        operatorClicked = false;
    }
    else if (currentValues[1] == 'X') {
        var newValue = (parseFloat(currentValues[0]) * parseFloat(currentValues[2])) + ' ' + event.target.innerText + ' ';

        document.getElementById("displayTb").value = newValue;
        operatorClicked = false;
    }

    else if (currentValues[1] == '+' && currentValues.length == 3) {
        // alert("here");
        var sign = event.target.innerText;
        if (sign === '+') {
        }
        var valueGot = parseFloat(currentValues[0]) + parseFloat(currentValues[2]) + ' ' + event.target.innerText + ' ';
        document.getElementById("displayTb").value = valueGot;
    }
    }

})();



