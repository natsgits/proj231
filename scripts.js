const form = document.getElementById('pageform');
const Fname = document.getElementById('fname').value;
const Lname = document.getElementById('lname').value;
const age = document.getElementById('age');
const err = document.getElementById('error');

//clock
const hour = document.getElementById('hr');
const minute = document.getElementById('min');

function getHour(){
    let today = new Date(Date.now());
    return today.getHours();
}

function getMin(){
    let today = new Date(Date.now());
    return today.getMinutes();
}

setInterval(() => {
    let hrs = getHour();
    let mins = getMin();
    hour.innerText = hrs;
    minute.innerText = mins;   
}, 500);

//formvalidation

form.addEventListener('submit',(e)=>{
let msg = [];

if(Fname.length <= 6 && Fname.length >= 20){
    msg.push("Name should be between 6 and 20 characters")
}

if(msg.length > 0){
    err.innerText = msg.join(', ');
    e.preventDefault();
}    
})