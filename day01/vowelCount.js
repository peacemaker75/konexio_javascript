function vowelCount(str) {
    var countVo = 0;
    var voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
    var dif = str.toLowerCase().split('');
    for(i = 0; i < dif.length; i++) {
        for(j = 0; j < voyelle.length; j++){
            if (voyelle[j] == dif[i]){
                countVo++
            }
        }
    }
    return countVo;
}
console.log(vowelCount("abcdef"));