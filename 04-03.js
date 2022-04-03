/* Rimanto uzdaviniai
for ciklas 
1a
*/
let forSuma = 0;
for (let i = 0; i <= 0; i++) {
    forSuma += i;
}
console.log(forSuma);
// 1b
for (let i = 0; i <= 4; i++) {
    forSuma += i;
}
console.log(forSuma);
// 1c
forSuma = 0;
for (let i = 0; i <= 100; i++) {
    forSuma += i;
}
console.log(forSuma);
// 1d
forSuma = 0;
for (let i = 574; i <= 815; i++) {
    forSuma += i;
}
console.log(forSuma);
//  1e
forSuma = 0;
for (let i = -50; i <= 50; i++) {
    forSuma += i;
}
console.log(forSuma);
// 1f
forSuma = 0;
for (let i = -70; i <= 30; i++) {
    forSuma += i;
}
console.log(forSuma);

// 2
let word = "abcdef";
let reversedWord = ""
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}
console.log(reversedWord);

// 3a 3b 3c???
let intervalStarting = 0;
let intervalEnding = -11;
let trysBeLiekanos = 0;
let penkiBeLiekanos = 0;
let septyniBeLiekanos = 0;

for (let i = intervalStarting; i >= intervalEnding; i--) {
    if (i % 3 === 0) {
        trysBeLiekanos++;
    }
    if (i % 5 === 0) {
        penkiBeLiekanos++;
    }
    if (i % 7 === 0) {
        septyniBeLiekanos++;
    }
}
console.log(`----------------------`);
console.log(`Skaiciu intervale tarp ${intervalStarting} ir ${intervalEnding}, besiladijanciu be liekanos is 3 yra ${trysBeLiekanos}`);
console.log(`Skaiciu intervale tarp ${intervalStarting} ir ${intervalEnding}, besiladijanciu be liekanos is 5 yra ${penkiBeLiekanos}`);
console.log(`Skaiciu intervale tarp ${intervalStarting} ir ${intervalEnding}, besiladijanciu be liekanos is 7 yra ${septyniBeLiekanos}`);

// Neefektyvus sprendimas dėl kodo ilgumo
// for (let i = intervalStarting; i >= intervalEnding; i--) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//         trysBeLiekanos++;
//         penkiBeLiekanos++;
//         septyniBeLiekanos++;
//     } else if (i % 3 === 0 && i % 5 === 0){
//         trysBeLiekanos++;
//         penkiBeLiekanos++;
//     } else if (i % 3 === 0 && i % 7 === 0){
//         trysBeLiekanos++;
//         septyniBeLiekanos++;
//     } else if (i % 5 === 0 && i % 7 === 0){
//         penkiBeLiekanos++;
//         septyniBeLiekanos++;
//     } else if (i % 3 === 0) {
//         trysBeLiekanos++; 
//     } else if (i % 5 === 0) {
//         penkiBeLiekanos++;
//     } else if (i % 7 === 0) {
//         septyniBeLiekanos++;
//     }
// }
// console.log(`Skaiciu intervale tarp ${intervalStarting} ir ${intervalEnding}, besiladijanciu be liekanos is 3 yra ${trysBeLiekanos}`);
// console.log(`Skaiciu intervale tarp ${intervalStarting} ir ${intervalEnding}, besiladijanciu be liekanos is 5 yra ${penkiBeLiekanos}`);
// console.log(`Skaiciu intervale tarp ${intervalStarting} ir ${intervalEnding}, besiladijanciu be liekanos is 7 yra ${septyniBeLiekanos}`);
// trysBeLiekanos = 0;
// penkiBeLiekanos = 0;
// septyniBeLiekanos = 0; 
console.log(`-----------------------`)
// Funkcijos
// 1a ???????????
// function a {
//     return;
// }
// console.log(a())
// 1b
function a() {
    return;
}
console.log(a())
// 1c
function b() {
    return false;
}
console.log(b())

// 2
function daugyba(a, b) {
    let sandauga = a*b;
    return sandauga;
}
console.log(daugyba(5, 7));

// 3
function skaitmenuKiekisSkaiciuje(n) {
    if (isNaN(n) || n === Boolean) {
        return console.log('Pateikta netinkamo tipo reiksme');
    }
    else {
        let skaiciausIlgis = n.toString().length;
        return console.log(skaiciausIlgis);
    }
}
skaitmenuKiekisSkaiciuje(NaN); 

// 4
console.log(`-----------------------`)
let sarasas = [];
function didziausiasSkaiciusSarase(arr) {
    let didziausias = arr[0];
    if (Array.isArray(arr) === false) {
        return 'Pateikta netinkamo tipo reiksme';
    } else if (arr.length === 0){
        return 'Pateiktas sarasas negali buti tuscias';
    } else {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (didziausias < arr[i]) {
                didziausias = arr[i];
            }
        }
    }  return didziausias;
}
console.log(didziausiasSkaiciusSarase(sarasas));