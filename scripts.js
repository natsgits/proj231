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
var ent;

function FlowControl(inp,callback){
    counter++;
    callback(inp);
 }

function FlowEval(ent,callback){ 
    while(ent!=='$'){
        callback(ent);
    }
}

 function entry(val,callback){
        entry.push(val);
        let val = entry.slice(-1);
        callback(val);
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
    FlowControl(1,(FlowEval()))
})

btnex.addEventListener('click',()=>{
    entry('$',()=>{FlowEval()});
})

btn1.addEventListener('click',()=>{
    entry('1',()=>{FlowEval()});
})

btn2.addEventListener('click',()=>{
    entry('2',()=>{FlowEval()});
})

btn3.addEventListener('click',()=>{
    entry('3',()=>{FlowEval()});
})

btn4.addEventListener('click',()=>{
    entry('4',()=>{FlowEval()});
})

btn5.addEventListener('click',()=>{
    entry('5',()=>{FlowEval()});
})

btn6.addEventListener('click',()=>{
    entry('6',()=>{FlowEval()});
})

btn7.addEventListener('click',()=>{
    entry('7',()=>{FlowEval()});
})

btn8.addEventListener('click',()=>{
    entry('8',()=>{FlowEval()});
})

btn9.addEventListener('click',()=>{
    entry('9',()=>{FlowEval()});
})

btn10.addEventListener('click',()=>{
    entry('0',()=>{FlowEval()});
})

btnop1.addEventListener('click',()=>{
    entry('+',()=>{FlowEval()});
})

btnop2.addEventListener('click',()=>{
    entry('-',()=>{FlowEval()});
})

btnop3.addEventListener('click',()=>{
    entry('*',()=>{FlowEval()});
})

btnop4.addEventListener('click',()=>{
    entry('/',()=>{FlowEval()});
})

btnop5.addEventListener('click',()=>{
    entry('%',()=>{FlowEval()});
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