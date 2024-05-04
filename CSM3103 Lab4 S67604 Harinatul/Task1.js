// Task 1: Function to find the square of a given number
function squareNumber () {
    const x = document.getElementById("number").value;
    document.getElementById("answer1").innerHTML = "Answer: " + (x * x);
}

// Task 2: Function to find the sum of cubes of two numbers
function SumCubes() {
    const x = document.getElementById("num2X").value;
    const y = document.getElementById("num2Y").value;
    document.getElementById("answer2").innerHTML = "Answer: " + ((x * x * x) + (y * y * y));
}

// Task 3: Function to reverse a number
function ReversedNumber() {
    const x = document.getElementById("num3").value;
    const reversedStr = x.toString().split('').reverse().join('');
    document.getElementById("answer3").innerHTML = "Answer: " + reversedStr;
}


// Task 4: Function to print all numbers between 1 and 100 divisible by a given number
function DivisibleNumbers() {
    const z = document.getElementById("num4").value;
    let nums = "";
    for (let i = 1; i <= 100; i++) {
        if ((i % z) === 0) {
            if (nums === "") {
                nums = i.toString();
            } 
            else {
                nums += ", " + i;
            }
        }
    }
    document.getElementById("answer4").innerHTML = "Answer: " + nums;
}