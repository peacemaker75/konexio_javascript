var arr = ['apple', 'croissant', 'pear'];

var arr2 = arr.map(function(str){
    var bouffe = str.split('');
    return '<li>' + str + '<li>';
})
console.log(arr2);