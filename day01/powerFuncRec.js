function powerFuncRec(num,power){
    if(power===1){
      return num;
    }else{
      return num**power;
    }
  }
  console.log(powerFuncRec(3,-8));