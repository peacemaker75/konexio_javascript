function swapCase(str) {
    var inverse = null;
    for( var i = 0; i < str.length; i++) {
        var letr = str.split('');
        if (letr[i] == letr[i].toUpperCase()){
            return inverse = letr[i].toLowerCase();
        } else {
            return inverse = letr[i].toUpperCase();
        }
    }
    return inverse;
}
console.log(swapCase('Hello World'));

//j'ai pas fini ne me juger pas :-)