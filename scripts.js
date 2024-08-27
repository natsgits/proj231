//query selectors for functional elements

const disp1 = document.getElementById('entry1');
const disp2 = document.getElementById('operation');
const disp3 = document.getElementById('entry2');
const disp4 = document.getElementById('res');

const btn1 = document.querySelector('button#one');
const btn2 = document.querySelector('button#two');
const btn3 = document.querySelector('button#three');
const btn4 = document.querySelector('button#four');
const btn5 = document.querySelector('button#five');
const btn6 = document.querySelector('button#six');
const btn7 = document.querySelector('button#seven');
const btn8 = document.querySelector('button#eight');
const btn9 = document.querySelector('button#nine');
const btn10 = document.querySelector('button#zero');
const btnex = document.querySelector("button#next");

const btnop1 = document.querySelector("button#add");
const btnop2 = document.querySelector("button#subtract");
const btnop3 = document.querySelector("button#multiply");
const btnop4 = document.querySelector("button#divide");
const btnop5 = document.querySelector("button#remainder");
const btnop6 = document.querySelector("button#equals")
const btnstart = document.querySelector("button#start");

//global variables

var e1;
var e2;
var result;
var operator;

var clickercount= 0;
var arr=[];
//functions

//Math operations

function operation(){
    if(operator == '+'){
        add(e1,e2);
    }
    if(operator == '-'){
        subtract(e1,e2);
    }
}

function add(num1,num2){
    let Bnum1;
    let Bnum2;
    let res;
    if(num1 >= Number.MIN_SAFE_INTEGER/2 || num2 >= Number.MIN_SAFE_INTEGER){
        Bnum1 = BigInt(num1);
        Bnum2 = BigInt(num2);
        res = Bnum1 + Bnum2;
    }
    else{
        res = num1+num2;
    }
    return res;
}

function subtract(num1,num2){
    let Bnum1;
    let Bnum2;
    let res;
    if(num1 >= Number.MIN_SAFE_INTEGER/2 || num2 >= Number.MIN_SAFE_INTEGER){
        Bnum1 = BigInt(num1);
        Bnum2 = BigInt(num2);
        if(Bnum1 < Bnum2){
            res = "second number is larger"
        }
        else{
            res = Bnum1 - Bnum2
        }
    }
    else{
        if(num1 < num2){
            res = "second number is larger"
        }
        else{
            res = num1 - num2;
        }
    }
    return res;
}




//flow control


function ValChecker() {
    let regex = /[0-9+-*\/%$]/g;
    let val = arr.slice(-1).match(regex);
    return val;
} 
    
    // if(val!==null){
    //     if(val  == '+' || val == '-' || val == '*' || val == '/'){
    //         counter++;
    //     }
    // }
    // else{

    // }


function flowcontrol(){
    let counter = 0;
    let i = arr.length-1;
    msgs = ["Press start","enter first number and click next", "enter second number and click next", "enter operator and click = ", `result = ` ]
    let flow = 5;

    if(counter == 0){
        disp4.innerText=msgs[0];
        counter++;
        }
    
    if(counter == 1){
        disp4.innerText = msgs[1];
        while(ValChecker()!==null){
            let val1 = arr.slice(arr[arr.length-1]-arr[i]).join('');
            disp1.innerText = Number.parseInt(val1); 
        }
        if(ValChecker()===null){
            i=arr.length-1;
            counter++;
            e1 = val1;
        }
    }
    
    if(counter == 2){
        disp4.innerText = msgs[2];
        while(ValChecker()!== null){
            let val2 = arr.slice(arr[arr.length-1],arr[i]).join('');
            disp2.innerText = Number.parseInt(val2);
        }
        if(ValChecker() === null){
            i = arr.length-1;
            counter++;
            e2 = val2;
        }
    }
      
   if(counter == 3) {
        disp4.innerText = msgs[3];
        if(arr.slice(-1)=='+' || arr.slice(-1) == '-' || arr.slice(-1) == '*' || arr.slice(-1) == '/' || arr.slice(-1) == '%'){
            operator = arr.slice(-1);
            disp3.innerText = operator;
            counter++;
        }
        else{
            disp4.innerText = "Wrong entry - click on any operator (+,-,*,/,%) button";
        }
  } 

  if(counter==4){
    result = operation();    
    disp4.innerText = msgs[4] +`${e1} + ${operator} + ${e2} => ${result} `;   
    counter = 0        
  }
    }   
    
    
    // while(counter<flow){
        
         
    //      if(check == '$'){
    //         counter = 0;
    //         return;
    //      }
    // }
    // counter++;




//adding event-listeners


btn1.addEventListener('click',()=>{
    arr.push('1');
    
})

btn2.addEventListener('click',()=>{
    arr.push('2');
    clickercount++;
})

btn3.addEventListener('click',()=>{
    arr.push('3');
    clickercount++;
})

btn4.addEventListener('click',()=>{
    arr.push('4');
    clickercount++;
})

btn5.addEventListener('click',()=>{
    arr.push('5');
    clickercount++;
})

btn6.addEventListener('click',()=>{
    arr.push('6');
    clickercount++;
})

btn7.addEventListener('click',()=>{
    arr.push('7');
    clickercount++;
})

btn8.addEventListener('click',()=>{
    arr.push('8');
    clickercount++;
})

btn9.addEventListener('click',()=>{
    arr.push('9');
    clickercount++;
})

btn10.addEventListener('click',()=>{
    arr.push('0');
    clickercount++;
})

btnex.addEventListener('click',()=>{
    arr.push(null);
    clickercount++;
})


btnop1.addEventListener('click',()=>{
    arr.push('+');
    clickercount++;
})

btnop2.addEventListener('click',()=>{
    arr.push('-');
    clickercount++;
})

btnop3.addEventListener('click',()=>{
    arr.push('*');
    clickercount++;
})

btnop4.addEventListener('click',()=>{
   arr.push('/');
   clickercount++;
})

btnop5.addEventListener('click',()=>{
    arr.push('%');
    clickercount++;
})

btnop6.addEventListener('click',()=>{
    operation();
})

btnstart.addEventListener('click',()=>{
    arr.push('$');
    flowcontrol();
})



