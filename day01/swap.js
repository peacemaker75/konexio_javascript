

function swap(var1, var2) {
    var var3 = var1;
    var var1 = var2;
    var var2 = var3;
    return [var1, var2];
}
console.log(swap(5, 14));