function show(id) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function calcOhm() {
    let v = parseFloat(V.value);
    let i = parseFloat(I.value);
    let r = parseFloat(R.value);

    if (v && i) ohmOut.innerText = "R = " + (v/i).toFixed(2) + " Ω";
    else if (v && r) ohmOut.innerText = "I = " + (v/r).toFixed(2) + " A";
    else if (i && r) ohmOut.innerText = "V = " + (i*r).toFixed(2) + " V";
}

function calcPower() {
    powerOut.innerText = "P = " + (Vp.value * Ip.value).toFixed(2) + " W";
}

function calcEnergy() {
    energyOut.innerText = "E = " + (Pe.value * t.value).toFixed(2) + " J";
}

function calcAC() {
    let V = parseFloat(Vrms.value);
    let I = parseFloat(Irms.value);
    let pf = parseFloat(document.getElementById("pf").value);

    let P = V * I * pf;
    acOut.innerText = "Real Power = " + P.toFixed(2) + " W";
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
