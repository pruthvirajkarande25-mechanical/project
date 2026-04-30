function calculate(){

let t1=parseFloat(document.getElementById("t1").value);
let t2=parseFloat(document.getElementById("t2").value);
let k=parseFloat(document.getElementById("k").value);
let a=parseFloat(document.getElementById("a").value);
let l=parseFloat(document.getElementById("l").value);

let q=(k*a*(t1-t2))/l;

document.getElementById("result").innerHTML=
"Heat Flow = "+q.toFixed(2)+" Watt";

}
