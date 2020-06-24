function letterCount(str, search){
    var num = 0;
    var strNb = str.split('');
    for(var i = 0; i< strNb.length; i++) {
        if (search == strNb[i]){
          num++
        }
    }
    return num;
}
console.log(letterCount("je ne vois pas ce que c'est", "e"));