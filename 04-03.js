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
let sarasas = ['pomidoras'];
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
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );


// 5
console.log(`-----------------------`)
function isrinktiRaides(text, letterNumber) {
    let surinktosRaides = '';
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    } else if (text.length === 0 || text.length > 100){
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (typeof letterNumber !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    } else if (letterNumber <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if ( letterNumber > text.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    for (let i = letterNumber - 1; i <= text.length - 1; i+=letterNumber) {
        surinktosRaides = surinktosRaides + text[i];
    }
    return surinktosRaides;
};
console.log(isrinktiRaides('Pirmojo kintamojo reikšmė yra netinkamo dydžio.Pirmojo kintamojo reikšmė yra netinkamo dydžio.Pirmojo kintamojo reikšmė yra netinkamo dydžio.', 5));
console.log(isrinktiRaides('', 5));
console.log(isrinktiRaides(false, 5));
console.log(isrinktiRaides('hello', '5'));
console.log(isrinktiRaides('hello', -1));
console.log(isrinktiRaides('hello', 10));

console.log(isrinktiRaides('hello', 2));
console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghijkl', 3 ) );
console.log(isrinktiRaides('abc', 0 ) );
console.log(isrinktiRaides('abc', 4 ) );
console.log(isrinktiRaides(1561, 2 ) );


//  6

function dalyba(a, b) {
    const dalyba = a / b;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Bent vienas is kintamuju nera skaicius';
    }
    if (isNaN(a) || isNaN(b)) {
        return 'Kintamieji turi buti tikri skaiciai';
    }
    if (b === 0) {
        return 'Dalyba is 0 nera galima';
    }
    if (a === Infinity || b === Infinity) {
        return 'Kintamieji turi buti tikri skaiciai'
    }
    return dalyba;
};

console.log(dalyba('a', 5));
console.log(dalyba(5, 'b'));
console.log(dalyba(5, NaN));
console.log(dalyba(NaN, 5));
console.log(dalyba([5, 7], 5));
console.log(dalyba(4, 0));
console.log(dalyba(0, 4));
console.log(dalyba(Infinity, 4));
console.log(dalyba(12, 4));
console.log(dalyba(0, 3));
console.log(dalyba(-2, 300));


