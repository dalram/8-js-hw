// 1
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let array = [];
for (let i = 0; i < random(20, 20); i++) {
    array.push(random(1, 4));
}

console.log(array);

// 2
console.log('=========================');
let nuo40iki60 = [];
let masyvoIlgis = random(40, 60);
console.log(masyvoIlgis);
for (let i = 0; i < masyvoIlgis; i++) {
    nuo40iki60.push(random(1, masyvoIlgis));
}

console.log(nuo40iki60);
console.log(nuo40iki60.length);

// 3
console.log('=========================');
let nuo10iki15 = [];
let ilgis = random(10, 15);
for (let i = 0; i < ilgis; i++) {
    nuo10iki15.push(random(5, 47));
}
console.log(nuo10iki15);
console.log(nuo10iki15.length);
 
function biggestNumber(a) {
    let number = a[0];
    for (let i = 0; i < a.length; i++) {
        if (number < a[i]) {
            number = a[i];
        }
    }
    return number;
}
console.log(biggestNumber(nuo10iki15));

// 4
console.log('=========================');
let raidziuMasyvas1 = '';
let raidziuMasyvoIlgis = 100;
let characters = 'DEFGH20';
for (let i = 0; i < raidziuMasyvoIlgis; i++) {
    raidziuMasyvas1 += characters[Math.floor(Math.random() * characters.length)];
}
raidziuMasyvas1 = raidziuMasyvas1.split('');
console.log(raidziuMasyvas1);
console.log(raidziuMasyvas1.length);

// 5
console.log('========================='); 
let raidziuMasyvas2 = '';
let characters2 = 'MNOP';
for (let i = 0; i < raidziuMasyvoIlgis; i++) {
    raidziuMasyvas2 += characters2[Math.floor(Math.random() * characters2.length)];
}
raidziuMasyvas2 = raidziuMasyvas2.split('');
console.log(raidziuMasyvas2);

