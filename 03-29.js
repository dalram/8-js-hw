console.log("Hi");
// Kintamuju inicijavimas
// 1 task
const vienas = 1;
console.log(vienas);
const du = 2;
console.log(du);
const trys = 3;
console.log(trys);
console.log(vienas + du + trys)
// 2 task
const vardas = 'Dalius';
const megsta = 'ledus';
const veiksmas = 'valgo';
// 3 task
const skaiciai = [2, 4, 7, 16, 22];
console.log(skaiciai);
// 4 task
const zodziai = ['Labas', 'as', 'esu', 'didis', 'krabas'];
console.log(zodziai);

// Veiksmai su kintamaisiais
// task 1
const suma = vienas + du + trys;
console.log(suma);
// task 2
console.log( vardas + " " + veiksmas + " " + megsta);
// task 3
const result = skaiciai[0] - skaiciai[1] + skaiciai[2] - skaiciai[3] + skaiciai[4];
console.log(result);
// task 4
const zodziaiAtvirksciai = zodziai[4] + ", " + zodziai[3] + ", " + zodziai[2] + ", " + zodziai[1] + ", " + zodziai[0] + "." ;
console.log(zodziaiAtvirksciai);


// Kintamuju palyginimas 
// task 1a
let pirmasKintamasis = 6;
let antrasKintamasis = 8;
if (pirmasKintamasis > antrasKintamasis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart')
}
// task 1b
if (pirmasKintamasis < antrasKintamasis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart')
}
// task 1c
if (pirmasKintamasis === antrasKintamasis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart')
}
// task 1d
if (pirmasKintamasis != antrasKintamasis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart')
}
// task 1e
if (pirmasKintamasis >= antrasKintamasis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart')
}
// task 1f 
if (pirmasKintamasis <= antrasKintamasis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart')
}
//  task 2
const tekstas = 'Laba diena JavaScript';

console.log(tekstas.length);
// task 3a
const pasisveikinimas = 'Laba diena kursiokai'
if (tekstas.length > pasisveikinimas.length){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 3b
if (tekstas.length < pasisveikinimas.length){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 3c
if (tekstas.length === pasisveikinimas.length){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 3d
if (tekstas.length != pasisveikinimas.length){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 3e
if (tekstas.length >= pasisveikinimas.length){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 3f
if (tekstas.length <= pasisveikinimas.length){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 4
const pirmasSarasas = ['Taip', 'skaiciuojam', 'masyvo', 'ilgi'];
console.log(pirmasSarasas[3].length);
// task 5a
if (pirmasSarasas[1].length > pirmasSarasas[2].length) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5b
if (pirmasSarasas[0].length < pirmasSarasas[1].length) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5c
if (pirmasSarasas[0].length === pirmasSarasas[3].length) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5d
if (pirmasSarasas[1].length !== pirmasSarasas[3].length) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5e
if (pirmasSarasas[0].length <= pirmasSarasas[3].length) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}
// task 5f
if (pirmasSarasas[0].length >= pirmasSarasas[3].length) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar kart');
}

// Ciklas for ir jo panaudojimas
// task 1a
let forSuma = 0;
for (let i = 0; i <= 0; i++) {
    forSuma + i;
}
console.log(forSuma);
// task 1b
forSuma = 0;
for (let i = 0; i <= 4; i++) {
    forSuma += i;
}
console.log(forSuma);
// task 1c
forSuma = 0;
for (let i = 0; i <= 100; i++) {
    forSuma += i;
}
console.log(forSuma);
// task 1d
forSuma = 0;
for (let i = 574; i <= 815; i++) {
    forSuma += i;
}
console.log(forSuma);
// task 1e
forSuma = 0;
for (let i = -50; i <= 50; i++) {
    forSuma += i;
}
console.log(forSuma);
// task 1f
forSuma = 0;
for (let i = -70; i <= 30; i++) {
    forSuma += i;
}
console.log(forSuma);
// task 2
function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i>=0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverse('crossfit'));

function wordLength(string) {
    return string.length;
}
console.log(wordLength("Dalius"));
