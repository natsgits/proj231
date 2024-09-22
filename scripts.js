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
var enter = [];
var ent;
var inp = 0;
var res = "";

function FlowEval(func){
   let entryVal = func;
   res = res + entryVal;
   console.log([entryVal,res]);
   let regFlow = /$/g;
   let regFin = /\@/g;
   let regNex = /([0-9\+\-\*\/\%])+/g;
   let evaluate = [];
   let eval = [];
   let result;
   if(entryVal.match(regFlow)!==null){
    inp++;
   }

   if(entryVal.match(regFin)!==null){
     eval = res.match(regNex);
     evaluate = eval.slice(-3);
     if(evaluate[2]=='+'){
        result = sum(+evaluate[0],+evaluate[1])
    }
    if(evaluate[2]=='-'){
        result = sub(+evaluate[0],+evaluate[1])
    }
    if(evaluate[2]=='*'){
        result = mul(+evaluate[0],+evaluate[1])
    }
    if(evaluate[2]=='/'){
        result = div(+evaluate[0],+evaluate[1])
    }
    if(evaluate[2]=='%'){
        result = mod(+evaluate[0],+evaluate[1])
    }
    inp=0;
   }
   else{
    inp++; 
   }
   console.log(evaluate,result);
}

 function entry(val){
        enter.push(val);
        let Eval = enter.slice(-1);
        return Eval[0];
 }

 function sum(entry1,entry2){
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
    FlowEval(entry('$$'));
})

btnex.addEventListener('click',()=>{
    FlowEval(entry('$'))
})

btn1.addEventListener('click',()=>{
    FlowEval(entry('1'))
})

btn2.addEventListener('click',()=>{
    FlowEval(entry('2'))
})

btn3.addEventListener('click',()=>{
    FlowEval(entry('3'))
})

btn4.addEventListener('click',()=>{
    FlowEval(entry('4'))
})

btn5.addEventListener('click',()=>{
    FlowEval(entry('5'))
})

btn6.addEventListener('click',()=>{
    FlowEval(entry('6'))
})

btn7.addEventListener('click',()=>{
    FlowEval(entry('7'))
})

btn8.addEventListener('click',()=>{
    FlowEval(entry('8'))
})

btn9.addEventListener('click',()=>{
    FlowEval(entry('9'))
})

btn10.addEventListener('click',()=>{
    FlowEval(entry('0'))
})

btnop1.addEventListener('click',()=>{
    FlowEval(entry('+'))
})

btnop2.addEventListener('click',()=>{
    FlowEval(entry('-'))
})

btnop3.addEventListener('click',()=>{
    FlowEval(entry('*'))
})

btnop4.addEventListener('click',()=>{
    FlowEval(entry('/'))
})

btnop5.addEventListener('click',()=>{
    FlowEval(entry('%'))
})

btnop6.addEventListener('click',()=>{
    FlowEval(entry('@'))
})