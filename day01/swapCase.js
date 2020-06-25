function swapCase(str) {
    var inverse = '';
    for( var i = 0; i < str.length; i++) {
        
        if (str[i] === str[i].toUpperCase()){
             inverse += str[i].toLowerCase();
        } else {
             inverse += str[i].toUpperCase();
        }
    }
    return inverse;
}
console.log(swapCase('Hello World'));