"use strict"

var screenText = document.getElementById('screenText');





const clearButton = document.getElementById('clear');
clearButton.addEventListener("click", () => {
    screenText.innerText = ""
});


const erase = document.getElementById('erase');
erase.addEventListener("click", () => { 
    screenText.innerHTML = screenText.innerHTML.substring(0, screenText.innerHTML.length-1)
});


const decimal = document.getElementById('decimal');
decimal.addEventListener("click", () => {
    let screen = document.getElementById("screen");
    screenText.innerText = "";
    screen = screen.classList.toggle('screen-on-off');
    
});

const multiply = document.getElementById('multiplication');
multiplication.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "*";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})

const addition = document.getElementById('addition');
addition.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = " + ";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})

const subtraction = document.getElementById('subtraction');
subtraction.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "-";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})

const equal = document.getElementById('equal');
equal.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "Error 404:";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = `${x} ${finalText}`;
})  

const seven = document.getElementById('seven');
seven.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "7";
    let finalText = remainingText.concat(x);

    screenText.innerText = finalText;
})


const eight = document.getElementById('eight');
eight.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "8";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})

const nine = document.getElementById('nine');
nine.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "9";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})



const four = document.getElementById('four');
four.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "4";
    let finalText = remainingText.concat(x);

    screenText.innerText = finalText;
})

const five = document.getElementById('five');
five.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "5";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})

const six = document.getElementById('six');
six.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "6";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})




const one = document.getElementById('one');
one.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "1";
    let finalText = remainingText.concat(x);

    screenText.innerText = finalText;
})


const two = document.getElementById('two');
two.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "2";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})


const three = document.getElementById('three');
three.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "6";
    let finalText = remainingText.concat(x);

    screenText.innerText = finalText;
})


const zero = document.getElementById('zero');
zero.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "0";
    let finalText = remainingText.concat(x);
    
    screenText.innerText = finalText;
})
const divide = document.getElementById('divide');
divide.addEventListener("click", () => {
    let remainingText = screenText.innerText;
    let x = "/";
    if(remainingText.endsWith(x)  == false) {
    let finalText = remainingText.concat(x);

    screenText.innerText = finalText;
    }
})

