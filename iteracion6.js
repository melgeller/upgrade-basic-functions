const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  for (i = 0; i < param.length; i++) {
    for (j = 0; j < param.length; j++) {
      if (param[i] === param[j] && i !== j) {
        param.splice(j, 1);
        j--;
      }
    }
  }
}

removeDuplicates(duplicates);
console.log(duplicates);
