var arr = [1, 2, 3, 4];
function isEven(num) {
    return num%2 === 0;
}
var arr2 = arr.map(function(num){
    var evenOrNot = isEven (num);
    return evenOrNot;
});
console.log(arr2);