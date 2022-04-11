// 1
let suma = 0;
while (suma < 100) {
    let random = Math.ceil(Math.random() * 10);
    suma += random;
    
}
console.log(suma);
console.log('========================');

// 2
suma = 0;
do {
    let random = Math.ceil(Math.random() * 10);
    suma += random;
    console.log(suma);
}
while (suma % 7 !== 0);
console.log('========================');
console.log('========================');

//  3

function knygosSkyriai(skyriai) {
    let skyriaiPerskaityti = 0;
    let skaitymoDienos = 0;
    while (skyriaiPerskaityti < skyriai) {
        skaitymoDienos++;
        skyriaiPerskaityti += skaitymoDienos;
        console.log(skyriaiPerskaityti);
        /*
        kol nurodytas skyriu skaicius yra didesnis uz skyriaiPerskaityti skaiciu, tol while dirba ir prie skaitymo dienu prideda +1,
         o skyriaiPerskaityti sumuoja skaitymoDienu skaicius, taip didejant 1 + 2 + 3 ir t.t. 
         Kai skyriaiPerskaityti tampa daugiau uz skyriu skaiciu, tada gauname galutine skaitymo dienu reiksme ir is jos isvedame
         vidurki perskaitytu skyriu per diena.
        */
    }
    console.log('Dienu skaicius:', skaitymoDienos)
    console.log('Vidutinis perskaitytu skyriu sk:', (skyriai / skaitymoDienos).toFixed(2));
}
knygosSkyriai(8);
knygosSkyriai(17);
console.log('========================');

// 4

// function randomNumbers(){
//     do {
//         random = Math.floor(Math.random() * 11);
//         console.log(random);
//     }
//     while (random !== 5)
// }
// randomNumbers();

function randomNumbers(){
    let n;
    let count = 0
    while (n !== 5) {
        n = Math.floor(Math.random() * 11);
        console.log(n);
        count++;
    }
    return console.log(`Prasisuko ${count} ciklu.`);
}
randomNumbers();
console.log('========================');

// 5
function random57(){
    let n;
    let count = 0
    while (n !== 5 && n !== 7) {
        n = Math.floor(Math.random() * 11);
        console.log(n);
        count++;
    }
    return console.log(`Prasisuko ${count} ciklu.`);
}
random57();
console.log('========================');
console.log('========================');
suma = 0;
while (suma === 0 || suma % 7 !== 0) {
    suma += Math.ceil(Math.random() * 10);

    
}
console.log(suma);

// suma = 0;

// while (suma === 0 || !(suma % 7 === 0)) {
//     suma += Math.floor(Math.random() * 11);
// }
// console.log(suma);
console.log('========================');
console.log('========================');
console.log('========================');
console.log(Math.max(7, 5));
console.log(Boolean(10 > 9));
console.log('========================');
console.log(1 == '1');

for(let i = 1; i < 5; i++){
    console.log(i);}