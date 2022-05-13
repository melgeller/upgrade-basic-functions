const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma = 0;
let div = 0;

function average(param) {
  for (let i = 0; i < param.length; i++) {
    suma += param[i];
  } div = suma / param.length;
  
}


average(numbers)

console.log(div)
console.log(suma)