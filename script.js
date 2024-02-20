let currentValue = "";
let previousValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded",function(){
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let clear = document.querySelector('#clear');
    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');

    numbers.forEach((number)=>number.addEventListener('click',function(e){
        if(currentValue.length<=5){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
        }
    }))

    operators.forEach((op)=>op.addEventListener('click',function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + "" + operator;
        currentScreen.textContent = currentValue;
    }))
    equal.addEventListener('click',function(){
        let num = calculate();
        currentScreen.textContent = num;
        previousScreen.textContent = "";
    })
    clear.addEventListener('click',function(){
        currentScreen.textContent = "";
        previousScreen.textContent = "";
        currentValue = "";
        previousValue = "";
        operator = "";
    })
    decimal.addEventListener('click',function(){
        
    })
   
})

function handleNumber(num){
    currentValue += num;
}
function handleOperator(op){
    operator += op;
    previousValue += currentValue;
    currentValue = "";
}
function calculate(){
   let previousValues = Number(previousValue);
   let currentValues = Number(currentValue);
    if(operator === "+"){
        return previousValues + currentValues;
    }
    else if(operator === "-"){
        return previousValues - currentValues;
    }
    else if(operator === "X"){
        return previousValues * currentValues;
    }
    else if(operator === "/"){
        return previousValues / currentValues;
    }
    else{
        return "NAN";
    }
}
