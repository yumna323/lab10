// Q1
function greetUser(Username){
    document.getElementById('output').innerText = "Hello, " +Username;
}
greetUser("Yumna");

// Q2
function changemsg(){
    document.getElementById('message').innerText = "Hello, World!";
    }

// Q3
function addnumbers(){
    const num2 = Number(document.getElementById('number2').value);
    const num1 = Number(document.getElementById('number1').value);
    document.getElementById('result').innerText = num1 + num2;
}

// Q4
function updatetxt(){
    let updatedtxt = document.getElementById('text1').value;
    document.getElementById('title').innerText = updatedtxt;
}

// Q5
function concatenatestrings(){
    let text2 = document.getElementById('text2').value;
    let text3 = document.getElementById('text3').value;
    document.getElementById('combinedText').innerText = text2 + " " + text3;
}

// Q6
function changebgcolor(){
document.getElementById('colorBox').style.backgroundColor = "blue";
}
document.getElementById('button4').addEventListener('click', changebgcolor);