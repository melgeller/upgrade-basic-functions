const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  let repetitions = 0
  let repeated = []
  
  function repeatCounter(param) {
      for(i = 0; i < param.length; i++){
        for(e = 0; e < param.length; e++){
            if(param[i]== param[e]){
                repetitions ++ 
            }
        }

        if (!repeated.includes(param[i])){ 
        repeated.push(param[i], repetitions)
         }
        repetitions = 0

    }
  }

repeatCounter(counterWords)

console.log(repeated);