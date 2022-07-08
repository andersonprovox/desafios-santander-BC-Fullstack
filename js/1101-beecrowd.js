const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const PI = 3.14159;

readline.question(`Informe os lados da esfera: `, lados => {
    let volume = (4/3) * PI * Math.pow(lados, 3);
    console.log(`VOLUME = ${volume.toFixed(3)}`);
})