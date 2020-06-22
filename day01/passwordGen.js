var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var result = '';
function passwordGen(num) {
    if (num < 6 || num > 15){
        console.log('erreur')
    }else {
        for(var i = 0; i < num; i++) {
        var random = Math.floor(Math.random()*alphabet.length);
        var letter = alphabet[random];
        result = result + letter;
        }return result;
    }
    
}

console.log(passwordGen(11));