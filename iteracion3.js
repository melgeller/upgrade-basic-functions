const numbers = [1, 2, 3, 5, 45, 37, 58];

let sumaTotal = 0;

function sumAll(param) {
  for (let i = 0; i < param.length; i++) {
sumaTotal += param[i] 
  }

  console.log(sumaTotal);
}

sumAll(numbers);
