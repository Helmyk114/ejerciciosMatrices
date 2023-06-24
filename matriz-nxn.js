// crear matriz
let n = parseInt(prompt("Escriba la longitud de la matriz"))


function crearMatriz(n) {
    let matriz = []
    for (let i = 0; i < n; i++) {
        matriz[i]=[]
        for (let j = 0; j < n; j++) {
            matriz[i][j] = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]`))
        }
    }
    return matriz
}

let matriz1 = crearMatriz(n)
let matriz2 = crearMatriz(n)

function mostrarMatriz(matriz, nombre) {
    console.log(`Matriz ${nombre}`)
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"))
    }
}

mostrarMatriz(matriz1,  "A")
mostrarMatriz(matriz2, "B")

function sumarMatriz(matriz1,matriz2) {
    let resultado = []

    for (let i = 0; i < matriz1.length; i++) {
        resultado[i] = []
        for (let j = 0; j < matriz1.length; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j]
        }
        
    }
    return resultado
}

let resultado = console.log(sumarMatriz(matriz1,matriz2))