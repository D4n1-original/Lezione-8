let matrix = [
    ["a","b","c","d"], //asse x
    [1,2,3,4,5,6,7,8] // asse y
]

let pedoneX = matrix[0][3]
let pedoneY = matrix[1][3]
let pedone = pedoneX + pedoneY

console.log(pedoneX);
console.log(pedoneY);
console.log(pedone);


//CICLO FOR -> Array

let arr1 = [2,4,5,7,8]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}


let arr2 = [2,4,5,7,"8",9]
// for (let element of arr2) {
//     lastNumber = element
// }

let lastNumber = arr2.concat(arr1,arr2)
console.log("Esempio arr2.concat: ");
console.log(lastNumber);

lastNumber.splice(3,0,arr1[0])
console.log("Esempio lastNumber.includes: ");
console.log(lastNumber.includes("2"));
console.log("Esempio lastNumber.join: ");
let newArray = lastNumber.join (", ")
console.log(newArray);

// WHILE - DO/WHILE

let counter = 0

// while (counter <= 5) {
//     console.log(counter);
//     counter++
// } 

// do {
//      console.log(counter);
//      if (counter >= 3) {
//          counter++
//      } else { counter = 3}
//  } while (counter <= 5)

// CICLI IF ANNIDATI

let studenti = [
    {nome: "Luca", voto: 8},
    {nome: "Mario", voto: 4},
    {nome: "Marco", voto: 9},
    {nome: "Gianni", voto: 9},
    {nome: "Gigi", voto: 8},
    {nome: "Andrea", voto: 5}
]
console.table(studenti)

let promossi = []
let bocciati = []
let votoPiuAlto = 0
let studentiMigliori = []

for (let i=0; i<studenti.length; i++) {
    let studente = studenti[i]
    if (studente.voto >= 6) {
        promossi.push ({nome: studente.nome, voto: studente.voto, valutazione: "Promosso"})
        if (studente.voto > votoPiuAlto) {
            votoPiuAlto = studente.voto
        }
    }else {
        bocciati.push ({nome: studente.nome, voto: studente.voto, valutazione: "Bocciato"})
    }
}

for (let i=0; i<promossi.length; i++) {
    let studente = promossi[i]
    if (studente.voto === votoPiuAlto) {
        studentiMigliori.push ({mome: studente.nome, voto: studente.voto})
    }
}

console.table(promossi)
console.table(bocciati)
console.log ("il voto piu alto è " + votoPiuAlto)
console.table(studentiMigliori)


// Cicli for annidati

let array1 = [2,4,7,9,12,77,45]
let array2 = [1,5,8,11,6,18]
let trovato = false

esterno: for (let i1=0;i1<array1.length;i1++) {
    for (let i2=0; i2<array2.length; i2++){
        if (array1[i1] === array2[i2]) {
            console.log("elemento trovato: "+array1[i1]);
            trovato= true
            break esterno
        }
    }
}

if (!trovato) {
    console.log("non ci sono numeri duplicati negli array");
}
