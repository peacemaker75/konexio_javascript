var arr = ['pan', 'tool', 'pal', 'top'];
var arr2 = arr.map(function(word) {
    var newArr = word.split('');
    var arrRev = newArr.reverse('');
    var reWord = arrRev.join('');
    return reWord;
});
console.log(arr2);