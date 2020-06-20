var countVo = 0;
var voyelle = ['a', 'e', 'i', 'o', 'u', 'y']
function vowelCount(str) {
    var dif = str.toLowerCase().split('');
    for(i = 0; i < dif.length; i++) {
        for(j = 0; j < voyelle.length; j++){
            if (voyelle[j] == dif[i]){
                countVo++
            }console.log(dif[i].toLowerCase() + " -> " + voyelle[j]); 
        }
    }return countVo;
}
console.log(vowelCount("La vie s'enchaine quand on la vie sans gene"));