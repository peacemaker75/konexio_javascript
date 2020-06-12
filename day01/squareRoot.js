function squareRoot(num){
    var num;
    for (var i = num; i > 1; i--) {
        if (i * i === num) {
            return i;
        }
    }
    return 0;
  }
  console.log(squareRoot(13));
  console.log(squareRoot(36));
  console.log(squareRoot(81));
