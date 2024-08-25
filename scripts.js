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
cons

const btnop1 = document.querySelector("button#add");
const btnop2 = document.querySelector("button#subtract");
const btnop3 = document.querySelector("button#multiply");
const btnop4 = document.querySelector("button#divide");
const btnop5 = document.querySelector("button#remainder");
const btnop6 = document.querySelector("button#equals")
const btnstart = document.querySelector("button#start");

//functions

var clickercount= 0;
var arr=[];


function flowcontrol(){
    let counter = 0;
    let e1=0;
    let e2=0;
    let res=0;
    let regex = /[0-9]/g;
    let regexop = /[^0-9]/g;
    msgs = ["enter first number and click next", "enter second number", "enter operator", "result = " ]
    let flow = 4;
    
        if(counter==1){
            disp4.innerText = msgs[0];
            if(arr.slice(-1).match(regexop)!==null){
                e1 = Number(arr.slice(0,arr.length-1).join(''));
                counter++; 
            }
        }
        if(counter==2){
            disp4.innerText = msgs[1];
        }

    
    
    
}

//adding event-listeners


btn1.addEventListener('click',()=>{
    arr.push(1);
    clickercount++;
})

btn2.addEventListener('click',()=>{
    arr.push(2);
    clickercount++;
})

btn3.addEventListener('click',()=>{
    arr.push(3);
    clickercount++;
})

btn4.addEventListener('click',()=>{
    arr.push(4);
    clickercount++;
})

btn5.addEventListener('click',()=>{
    arr.push(5);
    clickercount++;
})

btn6.addEventListener('click',()=>{
    arr.push(6);
    clickercount++;
})

btn7.addEventListener('click',()=>{
    arr.push(7);
    clickercount++;
})

btn8.addEventListener('click',()=>{
    arr.push(8);
    clickercount++;
})

btn9.addEventListener('click',()=>{
    arr.push(9);
    clickercount++;
})

btn10.addEventListener('click',()=>{
    arr.push(0);
    clickercount++;
})

btnop1.addEventListener('click',()=>{
    arr1.push('+');
    clickercount++;
})

btnop2.addEventListener('click',()=>{
    arr1.push('-');
    clickercount++;
})

btnop3.addEventListener('click',()=>{
    arr1.push('*');
    clickercount++;
})

btnop4.addEventListener('click',()=>{
   arr1.push('/');
   clickercount++;
})

btnop5.addEventListener('click',()=>{
    arr1.push('%');
    clickercount++;
})

btnop6.addEventListener('click',()=>{
    operation();
})

btnstart.addEventListener('click',()=>{
    flowcontrol();
})



