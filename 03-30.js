// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

const firstArray = ['skaiciuojam', 'masyvo', 'ilgi'];
const secondArray = [3, 8, 11];
const firstArrayLength = firstArray.length;
const secondArrayLength = secondArray.length;
// task 5a
if (firstArrayLength > secondArrayLength) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5b
if (firstArrayLength < secondArrayLength) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5c
if (firstArrayLength === secondArrayLength) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5d
if (firstArrayLength !== secondArrayLength) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5e
if (firstArrayLength <= secondArrayLength) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5f
if (firstArrayLength >= secondArrayLength) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// for (let i = 0; i < sarasas.length; i++) {
//     console.log(sarasas[i]);
// }
// 

function wordLength(string) {
    return string.length;
}
console.log(wordLength("Dalius"));

// Papildomos užduotys
console.log('----------------');
// 1 task
const skaicius = 20;
if (skaicius > 0) {
    console.log('Geras skaičius');
} else {
    console.log('Blogas skaičius');
}
// 2 task
let sviesoforoSpalva = 2;
if (sviesoforoSpalva === 1) {
    console.log('Eikite per gatvę'); 
}else if (sviesoforoSpalva === 2) {
    console.log('Palaukite');
} else if (sviesoforoSpalva === 3) {
    console.log('Draudziama eiti');
} else {
    console.log('Reiksme nezinoma');
}

// sprendimas su funkcija
function sviesoforas(n) {
    if (n === 1) {
        console.log('Eikite per gatvę');
    } else if (n === 2) {
        console.log('Palaukite');
    } else if (n === 3) {
        console.log('Draudziama eiti');
    } else {
        console.log('Reiksme nezinoma');
    }
}
sviesoforas(2);

// 3 task

let d = 2;
let k = 18;
let n = 5;
if (k <= (d*n)) {
    console.log('Knygos telpa i dezes');
} else {
    console.log('Knygos netelpa i dezes');
}

// sprendimas su funkcija

function knyguSkaicius(i) {
    d = 6;
    if (i <= d*n) {
        console.log('Knygos telpa i dezes');
    } 
    else {
        console.log('Knygos netelpa i dezes');
    }
}
knyguSkaicius(30);

// 4 task
let a = 8;
let b = 10;
if (a > b) {

    console.log(`Gauname skaicius: ${--a} ir ${++b}.`);
} 
else if (a < b) {

    console.log(`Gauname skaicius: ${++a} ir ${--b}.`);
}
else {
    console.log(`Skaiciai lygus.`);
}
// 4 funkcija


// 5 task
let centai = 50;
let porcija = 20;
let ledu = Math.floor( centai / porcija);
let likeCentai = centai % porcija;
console.log(`Saulius nusipirks ${ledu} porcijas ir liks ${likeCentai} centu.`);

// 5 function
function porcijuSkaicius(centai, porcija) {
    let porcijos = Math.floor(centai / porcija);
    let likutis = centai % porcija;
    console.log(`Saulius nusipirks ${porcijos} porcijas ir liks ${likutis} centu.`);
}
porcijuSkaicius(70, 40);

// 6 task
let degtukai = 9;
if (degtukai % 3 === 0) {
    console.log('trikampi sudelioti galima');
}
else {
    console.log('trikampio sudelioti negalima');
}
// 6 funkcija


// 7 task pirmas mano sprendimas
const menesiai = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let menesioSkaicius = 5;
console.log(`Menesio dienu skaicius yra: ${menesiai[menesioSkaicius - 1]}`);
// geresnis sprendimas
if (menesioSkaicius === 2) {
    dienuSkaicius = 28;
} else if (menesioSkaicius % 2 === 0) {
    dienuSkaicius = 30;
} else {
    dienuSkaicius = 31;
}
console.log(`Nurodyto menesio dienu skaicius yra: ${dienuSkaicius}`);
// 7 funkcija
// 8 task
let kauliukas = 4;
if (kauliukas % 2 === 0) {
    console.log('Kambari tvarko vyresnysis');
} else if (kauliukas > 6){
    console.log('Rezultato nera');
} else {
    console.log('Kambari tvarko jaunesnysis');
}
// 8 funckija

// 9 task
let metai = 1801;
const pirmosiosOlimpines = 1896;
if (metai % 4 === 0) {
    n = ((metai - pirmosiosOlimpines) / 4) + 1;
    console.log(n);
} else if (metai % 4 !== 0) {
    console.log('Metai neolimpiniai');
}
// } else if (metai < 1896) {
//     console.log('Olimpines dar nevyko');
// }

// teisingas

if (metai < 1896) {
    console.log('Olimpines dar nevyko');
} else if (metai % 4 === 0) {
    n = ((metai - pirmosiosOlimpines) / 4) + 1;
    console.log(n);    
} else {
    console.log('Metai neolimpiniai');
}

// 9 funkcija

// 10 task
let v1 = 8;
let m1 = 29;
let m2 = 23;
let v = 9;
let m = 5;
if (v1 * 60 + m1 + m2 <= v*60 + m) {
    console.log('Petras i pamokas neveluos');
} else {
    console.log('Petras i pamokas paveluos');
}
// 10 funkcija
function petroKelione(val1, min1, min2, val, min) {
    let kelVal = val1 * 60;
    let pamVal = val * 60;
    if (kelVal + min1 + min2 <= pamVal + min) {
        console.log('Petras i pamokas neveluos');
    } else {
        console.log('Petras i pamokas veluos');
    }
}
petroKelione(8, 29, 23, 9, 5);