// 1
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error, funckija priima tik skaicius'
    }
    return a + b;
}
console.log(suma(6, 5));
// 2
console.log('--------------');
function palyginimas(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error, funckija priima tik skaicius'
    }
    if (a > b) {
        return `Ivestas pirmasis skaicius ${a} didesnis uz ${b}`;
    }
    if (a < b) {
        return `Ivestas antasis skaicius ${b} didesnis uz pirmaji ${a}`;
    }
    if (a === b) {
        return `Ivesti skaiciai lygus`;
    }
}
console.log(palyginimas(5, 7));

// 3
console.log('--------------');
function keliamiejiMetai(metai) {
    if (typeof metai !== 'number') {
        return 'Error, funckija priima tik skaicius'
    }
    else if (metai % 4 === 0 && metai % 400 !== 100 && metai % 400 !== 200 && metai % 400 !== 300) {
    return `ivesti ${metai} metai yra keliamieji`;
    } else {
        return 'Ivesti metai nera keliamieji';
    }
}
console.log(keliamiejiMetai(1500));

// 4
console.log('--------------');
function kvadratu(a) {
    let skaiciausKvadratas
    if (typeof a !== 'number') {
        return 'Error, funckija priima tik skaicius'
    } else {
        return skaiciausKvadratas = a * a;
    }
}
console.log(kvadratu());

// 5
console.log('--------------');
function intervaloSuma (a) {
    let forSuma = 0;
    if (typeof a !== 'number') {
        return 'Error, funckija priima tik skaicius'
    }
    if (a <= 1) {
        return 'Ivestas skaicius turi buti didesnis uz 1';
    } else {
        for (let i = 1; i <= a; i++) {
            forSuma = forSuma + i;
        }
        return forSuma;
    }
};
console.log(intervaloSuma(2));

// 6
console.log('--------------');
function dalinasiIsSveikujuSkaiciu (a) {
    if (typeof a !== 'number') {
        return 'Error, funckija priima tik skaicius'
    }
}