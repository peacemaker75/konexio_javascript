console.log("Et le resultat est :");
function simpleAdding(num) {
var result = 0;
    for (i = 1; i <= num; i++) {
        result = result + i; 
    }
    return result; 
}
console.log(simpleAdding(10));