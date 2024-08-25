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

const btnop1 = document.querySelector("button#add");
const btnop2 = document.querySelector("button#subtract");
const btnop3 = document.querySelector("button#multiply");
const btnop4 = document.querySelector("button#divide");
const btnop5 = document.querySelector("button#remainder");
const btnop6 = document.querySelector("button#equals")

//functions
var counter = 0;
function flowcontrol(){
    msgs = ["enetr first number", "enter second number", "enter operator" , ]
    let flow = 4;
    counter++;
    if(init==1){
        disp4.innerText = ""
    }
}

//adding event-listeners

btn1.addEventListener('click',()=>{
    arr.push(1);
})

btn2.addEventListener('click',()=>{
    arr.push(2);
})

btn3.addEventListener('click',()=>{
    arr.push(3);
})

btn4.addEventListener('click',()=>{
    arr.push(4);
})

btn5.addEventListener('click',()=>{
    arr.push(5);
})

btn6.addEventListener('click',()=>{
    arr.push(6);
})

btn7.addEventListener('click',()=>{
    arr.push(7);
})

btn8.addEventListener('click',()=>{
    arr.push(8);
})

btn9.addEventListener('click',()=>{
    arr.push(9);
})

btn10.addEventListener('click',()=>{
    arr.push(0);
})

btnop1.addEventListener('click',()=>{
    arr1.push('+');
})

btnop2.addEventListener('click',()=>{
    arr1.push('-');
})

btnop3.addEventListener('click',()=>{
    arr1.push('*');
})

btnop4.addEventListener('click',()=>{
   arr1.push('/');
})

btnop5.addEventListener('click',()=>{
    arr1.push('%');
})

btnop6.addEventListener('click',()=>{
    operation();
})





