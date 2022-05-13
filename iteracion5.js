//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:



const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let suma = 0


function averageWord(param) {
for (i = 0; i < param.length; i++){
    if (typeof param[i] === "number"){
        suma += param[i]
    } else (suma += param[i].length);
    
}


}

averageWord(mixedElements)

console.log(suma)
