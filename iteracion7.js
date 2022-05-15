const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

let contains = false
let position = 0

function repeatCounter(array, param){
    for (i = 0; i < array.length; i++){
if (array.includes(param)){
    contains = true;
    position = array.indexOf(param)
}  
 else (contains = false)
    } 
}
  repeatCounter(nameFinder, "Steve")
  console.log(contains, position) 