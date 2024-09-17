//query selectors for functional elements

const disp1 = document.getElementById('entry1');
const disp2 = document.getElementById('operation');
const disp3 = document.getElementById('entry2');
const disp4 = document.getElementById('ins');
const disp5 = document.getElementById('res');

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

//functions
var counter=0;
const msgs = ["Press Start","Enter the first numeral and click 'Next'","Enter the second numeral and click 'Next'","Enter the operation","Press '='"];  
var entry = [];


function FlowControl(inp,callback){
         
 }

 

 function entry(val,callback){
    
 }

 function sum(entry1, entry2){
    return entry1 + entry2;
 }

 function sub(entry1,entry2){
    return entry1 - entry2;
 }

 function mul(entry1,entry2){
    return entry1*entry2;
 }

 function div(entry1,entry2){
    return entry1/entry2;
 }

 function mod(entry1,entry2){
    return entry1%entry2;
 }

//adding eventlisteners
btnstart.addEventListener('click',()=>{
   FlowControl(,())
})

btnex.addEventListener('click',()=>{
    
})

btn1.addEventListener('click',()=>{

})

btn2.addEventListener('click',()=>{

})

btn3.addEventListener('click',()=>{

})

btn4.addEventListener('click',()=>{

})

btn5.addEventListener('click',()=>{

})

btn6.addEventListener('click',()=>{

})

btn7.addEventListener('click',()=>{

})

btn8.addEventListener('click',()=>{

})

btn9.addEventListener('click',()=>{

})

btn10.addEventListener('click',()=>{

})

btnop1.addEventListener('click',()=>{

})

btnop2.addEventListener('click',()=>{

})

btnop3.addEventListener('click',()=>{

})

btnop4.addEventListener('click',()=>{

})

btnop5.addEventListener('click',()=>{

})

btnop6.addEventListener('click',()=>{
  FlowControl(0,(entry1,entry2,op)=>{
    switch(op){
        case (op=='+'):{
            sum(entry1,entry2);
            break;
        }
        case (op=='-'):{
            sub(entry1,entry2);
            break;
        }
        case (op=='*'):{
            mul(entry1,entry2);
            break;
        }
        case (op =='/'):{
            div(entry1,entry2);
            break;
        }
        case (op == '%'):{
            mod(entry1,entry2);
            break;
        }
        default:console.log(res);
    }
  })
})