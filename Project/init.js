var form=document.getElementById("new");
function submitForm(event){
   event.preventDefault();
}
form.addEventListener('submit', submitForm);
document.getElementById("submit").addEventListener("click", func);
function func(){
    var ptype=document.getElementById("ptype").value;

var rfailure=document.getElementById("rfailure").value;
var oxygen=document.getElementById("Oxygen").value;
var CO=document.getElementById("CO2").value;
var Diaphragm=document.getElementById("Diaphragm").value;
if(ptype=="Select") {
    alert("Select Patient Type");
    return;
}
if(rfailure=="Select"){
    alert("Select Respiratory failure");
    return;
}
if(oxygen<=0) {
    alert("Patient is dead required shock");
    return;
}
if(oxygen>45){
    alert("No requirement of ventilation");
    return;
}
if(CO<=0){
    alert("Patient is dead");
    return;
}
if(CO>45){
    alert("required incubation tube");
    return;
}
if(Diaphragm<=0){
    alert("Patient is dead");
    return;
}
if(Diaphragm>9){
    alert("can't be possible");
    return;
}
const values = [ptype, rfailure, oxygen,CO,Diaphragm];
fetch('/result', {
  method:'POST',
  body: JSON.stringify({ values }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('The sum of the values is:', data.sum);
})
.catch(error => console.error(error));
var output=" ";
if(ptype=="Neonate"){
    if(rfailure=="Hypoxemic"){
        if(oxygen<25){
            output="PC-CMV";
        }
        if(oxygen>25 && oxygen<45){
            output="PC-ACV and VC-CMV";
        }
    }
    if(rfailure=="Hypercapnic"){
        if(oxygen<20){
            output="PC-SIMV";
        }
        if(oxygen>20 && oxygen<45){
            output="PC-AMV and VC-SIMV";
        }
    }
    if(rfailure=="Perioperative"){
        if(oxygen<23){
            output="PC-CMV";
        }
        if(oxygen>23 && oxygen<45){
            output="PC-ACV and VC-CMV";
        }
    }
}
if(ptype=="Pediatric"){
    if(rfailure=="Hypoxemic"){
        if(oxygen<20){
            output="PC-ACV";
        }
        if(oxygen>20 && oxygen<40){
            output="PC-AMV and VC-SIMV";
        }
    }
    if(rfailure=="Hypercapnic"){
        if(oxygen<18){
            output="PC-AMV";
        }
        if(oxygen>18 && oxygen<45){
            output="PC-AMV and VC-SIMV+";
        }
    }
    if(rfailure=="Perioperative"){
        if(oxygen<16){
            output="PC-CMV";
        }
        if(oxygen>16 && oxygen<40){
            output="PC-APRV and VC-AUC";
        }
    }
}
let tint=parseInt(oxygen);
tint=tint+50;
if(ptype=="Adult"){
    if(rfailure=="Hypoxemic"){
        if(oxygen<23){
            output="PC-MMV";
        }
        if(oxygen>23 && oxygen<43){
            output="PC-CMV and VC-SIMV";
        }
    }
    if(rfailure=="Hypercapnic"){
        if(oxygen<19){
            output="PC-ACV";
        }
        if(oxygen>20 && oxygen<45){
            output="PC-AMV and VC-SIMV";
        }
    }
    if(rfailure=="Perioperative"){
        if(oxygen<23){
            output="PC-CMV";
        }
        if(oxygen>23 && oxygen<45){
            output="PC-ACV and VC-CMV";
        }
    }
}
var  ans="Oxygen Should be given in " +output+' mode upto '+tint +"mmHG";
document.getElementById("show").innerHTML=ans;
}