//Task 1 : Function to find sum of digits of a number
function FindSumDigits () {
    const x = document.getElementById("number").value;
    let sum = 0;
    let number = Math.abs(x);
    while (number !== 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    document.getElementById("sum").innerHTML = "Answer: " + sum;
    
}

//Task 2 : Function to compute x raise to the power  y using recursion
function FindPower() {
    const x = document.getElementById("num2X").value;
    const y = document.getElementById("num2Y").value;

    if (y == 0) {
        document.getElementById("answer2").innerHTML = "Answer: 1";
    } else if (y < 0) {
        document.getElementById("answer2").innerHTML = "Answer: " + (1 / Math.pow(x, -y));
    } else {
        document.getElementById("answer2").innerHTML = "Answer: " + Math.pow(x, y);
    }

}