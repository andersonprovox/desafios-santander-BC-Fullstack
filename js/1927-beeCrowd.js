const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`insira os lados da pipa `, lados => {

    let resposta = ((lados - 3) * lados) /2;
    console.log(resposta);
    readline.close();
})




