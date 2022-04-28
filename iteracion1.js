function sum(numberOne , numberTwo) {
    if(numberOne < numberTwo) {
        return numberTwo
    } else if (numberOne > numberTwo) {
        return numberOne
    }
}

let numeroUno = 20
let numeroDos = 15

let suma = sum(numeroUno, numeroDos);

console.log(suma)

const ffOchoNames = ['Rinoa', 'Squall', 'Artemisa', 'Quistis', 'Selphie', 'Laguna']
const ffnames = ['Yuna', 'Tidus', 'Rikku', 'Auron', 'Wakka', 'Lulu', 'Seymour'];
function findLongestWord(param) {
    let longestWord = param[0];

    for (let i = 0; i < param.length; i++){
        if (param[i].length > longestWord.length){
            longestWord = param[i]
        }
    }
console.log(longestWord)

}

findLongestWord (ffnames)
findLongestWord (ffOchoNames)