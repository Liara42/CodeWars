function persistence(num) {
  let number = 1;
  let counter = 0;
  let checkNum = num;

  while (num) {
    number *= (num % 10);
    num = ~~(num / 10);
    
    if(!num){
      if(checkNum === number){
        num = 0;
      }
      else{
      counter++;
      num = number;
      checkNum = num;
      number = 1;
      }
    }
  }
  return counter;
}

persistence(39);
persistence(4);
persistence(25);
persistence(999);
