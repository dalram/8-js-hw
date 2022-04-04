// 1
for (let i = 0; i < 5; i++) {
    console.log('Labas');
}
// 2
console.log('---------------');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 3
console.log('---------------');
for (let i = 0; i < 50; i = i + 10) {
    console.log(i);
}
// 4
console.log('---------------');
for (let i = 49; i <= 53; i++) {
    console.log(i);
}
// 5
console.log('---------------');
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random()* 10));
}
// 6
console.log('---------------');
for (let i = 1; i <= 20; i++) {
    if (i % 3 !== 0) {
        console.log(i)
    }
}
// 7
console.log('---------------');
const skaicius = 6;
console.log(`Skaiciaus ${skaicius} daugybos lentele:`); 
for (let i = 1; i <= 10; i++) {
    console.log(`${skaicius} * ${i} = ${skaicius * i}`)
}
// 8
console.log('---------------');
const n = 6;
for (let i = 1; i <= n; i++) {
    console.log(`| ${i} | ${i * 2.54} cm |`);
}
// 9
const metai = 10;
let indelis = 100;
const palukanos = 0.02;
for (let i = 1; i <= metai; i++) {
    indelis = indelis + (indelis * palukanos);
    console.log(`${i} metais esant ${palukanos * 100}% palukanoms Jusu indelio dydis bus ${Math.round(indelis *100) / 100}`);
}
// 10
let dabartiniaiMetai = 2022;
console.log('---------------');
for (let i = 0; i <= dabartiniaiMetai; i++) {
    // if (metai % 4 === 0 && metai % 400 > 0) {
        if (i % 4 === 0 && i % 400 !== 100 && i % 400 !== 200 && i % 400 !== 300) {
            console.log(i);
        }
};
