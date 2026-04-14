function show(id) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

/* UNIT CONVERTER */
function parseValue(val) {
    if (!val) return 0;
    val = val.toLowerCase();

    if (val.includes("k")) return parseFloat(val) * 1e3;
    if (val.includes("m")) return parseFloat(val) * 1e-3;
    if (val.includes("u")) return parseFloat(val) * 1e-6;

    return parseFloat(val);
}

/* OHM */
function calcOhm() {
    let v = parseValue(V.value);
    let i = parseValue(I.value);
    let r = parseValue(R.value);

    if (v && i) ohmOut.innerText = `Resistance = ${(v/i).toFixed(2)} Ω`;
    else if (v && r) ohmOut.innerText = `Current = ${(v/r).toFixed(2)} A`;
    else if (i && r) ohmOut.innerText = `Voltage = ${(i*r).toFixed(2)} V`;
}

/* POWER */
function calcPower() {
    let v = parseValue(Vp.value);
    let i = parseValue(Ip.value);
    powerOut.innerText = `Power = ${(v*i).toFixed(2)} W`;
}

/* ENERGY */
function calcEnergy() {
    let p = parseValue(Pe.value);
    let time = parseValue(t.value);
    energyOut.innerText = `Energy = ${(p*time).toFixed(2)} J`;
}

/* AC POWER */
function calcAC() {
    let V = parseValue(Vrms.value);
    let I = parseValue(Irms.value);
    let pf = parseFloat(document.getElementById("pf").value);

    let P = V * I * pf;
    acOut.innerText = `Real Power = ${P.toFixed(2)} W`;
}

/* REACTANCE */
function calcReactance() {
    let f = parseValue(freq.value);
    let L = parseValue(induct.value);
    let cVal = parseFloat(cap.value);
let cUnit = parseFloat(document.getElementById("capUnit").value);
let C = cVal * cUnit;

    let XL = 2 * Math.PI * f * L;
    let XC = 1 / (2 * Math.PI * f * C);

    reactOut.innerText =
`XL = ${XL.toFixed(2)} Ω | XC = ${XC.toExponential(2)} Ω`;
    
}

/* IMPEDANCE */
function calcImpedance() {
    let R = parseValue(Rz.value);
    let XL = parseValue(Xl.value);
    let XC = parseValue(Xc.value);

    let Z = Math.sqrt(R*R + Math.pow((XL-XC),2));

    impOut.innerText = `Impedance Z = ${Z.toFixed(2)} Ω`;
}

const colors = [
    "Black","Brown","Red","Orange","Yellow",
    "Green","Blue","Violet","Gray","White"
];

colors.forEach((c,i)=>{
    b1.innerHTML += `<option value="${i}">${c}</option>`;
    b2.innerHTML += `<option value="${i}">${c}</option>`;
    b3.innerHTML += `<option value="${i}">${c}</option>`;
    mult.innerHTML += `<option value="${10**i}">${c}</option>`;
});

tol.innerHTML = `
<option value="0">None</option>
<option value="5">Gold (±5%)</option>
<option value="10">Silver (±10%)</option>
`;

function updateBands() {
    let type = bandType.value;

    b3.style.display = (type >= 5) ? "block" : "none";
    tol.style.display = (type >= 4) ? "block" : "none";
}

function formatRes(value) {
    if (value >= 1e9) return (value/1e9).toFixed(2) + " GΩ";
    if (value >= 1e6) return (value/1e6).toFixed(2) + " MΩ";
    if (value >= 1e3) return (value/1e3).toFixed(2) + " kΩ";
    return value + " Ω";
}

function calcRes() {
    let type = bandType.value;

    let value;

    if (type == 3 || type == 4) {
        value = ((+b1.value * 10) + (+b2.value)) * (+mult.value);
    } else {
        value = ((+b1.value * 100) + (+b2.value * 10) + (+b3.value)) * (+mult.value);
    }

    let tolVal = tol.value;

    let output = "Resistance = " + formatRes(value);

    if (tolVal != 0) {
        output += ` ±${tolVal}%`;
    }

    resOut.innerText = output;
}
