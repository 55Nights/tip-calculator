

function calc(n) {
    var Bill=document.getElementById("bill").value;
var person=document.getElementById("Persons").value;
var tip=document.getElementById("pertip");
var pertotal=document.getElementById("pertotal");

if (Bill==="" ) {
    alert("enter the bill");
}
if (person===""|| person<0) {
    alert("invalid input on number of people")
}


    var n;
    var tp;
    var total;


    if (n===1 ) {
        tp= (Bill*0.05)/person;
        total=(Bill/person)+tp;
        total=total.toFixed(2);
        tp=tp.toFixed(2);
        tip.value=tp;
        pertotal.value=total;
    }
    if (n===2 ) {
        tp= (Bill*0.10)/person;
        total=(Bill/person)+tp;
        total=total.toFixed(2);
        tp=tp.toFixed(2);
        tip.value=tp;
        pertotal.value=total;
    }
     if (n===3) {
        tp= (Bill*0.15)/person;
        total=(Bill/person)+tp;
        total=total.toFixed(2);
        tp=tp.toFixed(2);
        tip.value=tp;
        pertotal.value=total;
    }
     if (n===4 ) {
        tp= (Bill*0.25)/person;
        total=(Bill/person)+tp;
        total=total.toFixed(2);
        tp=tp.toFixed(2);
        tip.value=tp;
        pertotal.value=total;
    }
    if (n===5 ) {
        tp= (Bill*0.50)/person;
        total=(Bill/person)+tp;
         total=total.toFixed(2);
         tp=tp.toFixed(2);
        tip.value=tp;
        pertotal.value=total;
    }
    if (n===6 ) {
        Bill.value="";
        person.value="";
    }
    
}
function reset() {
    var tip=document.getElementById("pertip");
var pertotal=document.getElementById("pertotal");

tip.value="";
pertotal.value="";
    
}