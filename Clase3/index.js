const numeros = {}

function getAleatorio() {
    return parseInt(Math.random() * 20) + 1
}

for (let i = 0; i < 10000; i++) {
    const num = getAleatorio()
    if (!numeros[num]) {
        numeros[num] = 0
    }
    numeros[num]++
}

console.log(numeros)

