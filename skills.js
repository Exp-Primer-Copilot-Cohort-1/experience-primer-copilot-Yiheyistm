function calculateNumbers() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = Number(num1) + Number(num2);
    var difference = Number(num1) - Number(num2);
    var product = Number(num1) * Number(num2);
    var quotient = Number(num1) / Number(num2);
    document.getElementById('sum').value = sum;
    document.getElementById('difference').value = difference;
}
