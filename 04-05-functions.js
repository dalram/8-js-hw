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
        return `Ivestas antrasis skaicius ${b} didesnis uz pirmaji ${a}`;
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
    let skaiciausKvadratas;
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
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'Error, funckija priima tik sveikuosius skaicius'
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
console.log(intervaloSuma(15));

// 6
console.log('--------------');
function dalinasiIsSveikujuSkaiciu (a) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'Error, funckija priima tik sveikuosius skaicius'
    }
    let dalikliai = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            dalikliai++; 
        } else {
            continue;
        }
    }
    return dalikliai;
}
console.log(dalinasiIsSveikujuSkaiciu(30));

// 7
console.log('--------------');
function tekstoIlgis(text) {
    if (typeof text !== 'string') {
        return 'Error: funckija priima tik teksta';
    }
    return `Ivestas tekstas yra: ${text} ---> teksto simboliu kiekis yra ${text.length}.`
};
console.log(tekstoIlgis('Begemotas'))

// 8
console.log('--------------');
function telefonoNumeris(arr) {
    if (typeof arr !== 'object') {
        return 'Error: funkcijai turi buti pateiktas masyvas';
    }
    if (arr.length !== 10) {
        return 'Error: funkcijai turi buti pateiktas 10 skaiciu masyvas';
    }
    let telNr = '';
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (typeof number !== 'number') {
            return 'Error: Masyva turi sudaryt desimt skaiciu.'
        } 
        if (number >= 10 || number < 0) {
            return 'Error: Visu masyve nurodytu skaiciu reiksmes turi buti nuo 0 iki 9.'
        }
        telNr += number;
    }
    return `(${telNr[0] + telNr[1] + telNr[2]}) ${telNr[4] + telNr[5] + telNr[6]}-${telNr[7] + telNr[8] + telNr[9]}`;
};

console.log(telefonoNumeris([10, 20, 30, 40, 50, 1, 2, 3, 4]));
console.log(telefonoNumeris([10, 20, 30, 40, 50, 1, 2, 3, 4, 5, 5]));
console.log(telefonoNumeris(["10", 20, 30, 40, 50, 1, '2', 3, 4, 5]));
console.log('--------------');
console.log(telefonoNumeris([9, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

// 9
console.log('--------------');
function ilgesnisKintamasis(texta, textb) {
    if (typeof texta !== 'string' || typeof textb !== 'string') {
        return 'Error: Abu kintamieji turi buti tekstinio tipo'
    }
    if (texta.length > textb.length) {
        return 'Pirmasis pateiktas tekstas yra ilgesnis.'
    } else if (texta.length < textb.length) {
        return 'Antrasis pateiktas tekstas yra ilgesnis.'
    } else {
        return 'Tekstu ilgiai yra vienodi.'
    }
}
console.log(ilgesnisKintamasis('v', 'v'));
console.log(ilgesnisKintamasis("5", 7));
console.log(ilgesnisKintamasis(5, "5"));
console.log(ilgesnisKintamasis('5','tru'));

// 10
console.log('--------------');
function sumaA(text) {
    if (typeof text !== 'string') {
        return 'Error: Pateiktas kintamasis turi buti tekstinio tipo.'
    }
    let aCount = 0;
    for (let i=0; i < text.length; i++) {
        const raide = text[i];
        if (raide === 'a') {
            aCount++;
        } else {
            continue;
        }
    }
    return aCount;
}
console.log(sumaA(5));
console.log(sumaA(false));
console.log(sumaA('faaaaaaaaaaaaaaaaaaaalse'));