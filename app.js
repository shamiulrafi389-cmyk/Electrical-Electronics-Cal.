function calcEnergy(){
    let p = parseFloat(document.getElementById("pe").value);
    let time = parseFloat(document.getElementById("t").value);

    document.getElementById("energyOut").innerText =
    "E = "+(p*time).toFixed(2);
}
function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

window.onload = () => show("ohm");

/* OHM */
function calcOhm(){
let v = parseFloat(document.getElementById("v").value);
let i = parseFloat(document.getElementById("i").value);
document.getElementById("ohmOut").innerText = "R = "+(v/i).toFixed(2)+" Ω";
}

/* POWER */
function calcPower(){
let v = parseFloat(vp.value);
let i = parseFloat(ip.value);
powerOut.innerText = "P = "+(v*i).toFixed(2)+" W";
}

/* ENERGY */
function calcEnergy(){
let p = parseFloat(pe.value);
let time = parseFloat(t.value);
energyOut.innerText = "E = "+(p*time).toFixed(2);
}

/* AC */
function calcAC(){
let V = parseFloat(Vrms.value);
let I = parseFloat(Irms.value);
let pfv = parseFloat(pf.value);
acOut.innerText = "Power = "+(V*I*pfv).toFixed(2)+" W";
}

/* REACTANCE */
function calcReactance(){
let f = parseFloat(freq.value);
let L = parseFloat(induct.value);
let C = parseFloat(cap.value);

let XL = 2*Math.PI*f*L;
let XC = 1/(2*Math.PI*f*C);

reactOut.innerText = "XL="+XL.toFixed(2)+" Ω | XC="+XC.toFixed(2)+" Ω";
}

/* IMPEDANCE */
function calcImpedance(){
let R = parseFloat(Rz.value);
let XL = parseFloat(Xl.value);
let XC = parseFloat(Xc.value);

let Z = Math.sqrt(R*R + Math.pow(XL-XC,2));
impOut.innerText = "Z = "+Z.toFixed(2)+" Ω";
}

/* RESISTOR */
const colors=["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Gray","White"];

colors.forEach((c,i)=>{
b1.innerHTML+=`<option value="${i}">${c}</option>`;
b2.innerHTML+=`<option value="${i}">${c}</option>`;
b3.innerHTML+=`<option value="${i}">${c}</option>`;
mult.innerHTML+=`<option value="${10**i}">${c}</option>`;
});

tol.innerHTML=`
<option value="0">None</option>
<option value="5">Gold (±5%)</option>
<option value="10">Silver (±10%)</option>
`;

function updateBands(){
let t = bandType.value;
b3.style.display = (t>=5)?"block":"none";
tol.style.display = (t>=4)?"block":"none";
}

function formatRes(v){
if(v>=1e9) return (v/1e9).toFixed(2)+" GΩ";
if(v>=1e6) return (v/1e6).toFixed(2)+" MΩ";
if(v>=1e3) return (v/1e3).toFixed(2)+" kΩ";
return v+" Ω";
}

function calcRes(){
let type = bandType.value;
let value;

if(type==3 || type==4){
value = (b1.value*10 + +b2.value) * mult.value;
}else{
value = (b1.value*100 + b2.value*10 + +b3.value) * mult.value;
}

resOut.innerText="Resistance = "+formatRes(value);
}
