function show(id) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function calcOhm() {
    let v = parseFloat(document.getElementById("V").value);
    let i = parseFloat(document.getElementById("I").value);
    let r = parseFloat(document.getElementById("R").value);

    if (v && i)
        ohmOut.innerText = "R = " + (v / i).toFixed(2) + " Ω";
    else if (v && r)
        ohmOut.innerText = "I = " + (v / r).toFixed(2) + " A";
    else if (i && r)
        ohmOut.innerText = "V = " + (i * r).toFixed(2) + " V";
}

function calcPower() {
    let v = parseFloat(Vp.value);
    let i = parseFloat(Ip.value);
    powerOut.innerText = "P = " + (v * i).toFixed(2) + " W";
}

function calcEnergy() {
    let p = parseFloat(Pe.value);
    let time = parseFloat(t.value);
    energyOut.innerText = "E = " + (p * time).toFixed(2) + " J";
}

function calcFreq() {
    let T = parseFloat(document.getElementById("T").value);
    freqOut.innerText = "f = " + (1 / T).toFixed(2) + " Hz";
}

function calcCap() {
    let Q = parseFloat(document.getElementById("Q").value);
    let V = parseFloat(document.getElementById("Vc").value);
    capOut.innerText = "C = " + (Q / V).toFixed(6) + " F";
}

function calcInd() {
    let fluxVal = parseFloat(document.getElementById("flux").value);
    let I = parseFloat(document.getElementById("Il").value);
    indOut.innerText = "L = " + (fluxVal / I).toFixed(6) + " H";
}

const colors = ["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Gray","White"];

colors.forEach((c,i)=>{
    b1.innerHTML += `<option value="${i}">${c}</option>`;
    b2.innerHTML += `<option value="${i}">${c}</option>`;
    mult.innerHTML += `<option value="${10**i}">${c}</option>`;
});

function calcRes() {
    let value = ((+b1.value * 10) + (+b2.value)) * (+mult.value);
    resOut.innerText = "Resistance = " + value + " Ω";
}