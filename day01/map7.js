var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function(star){
    var fName = star.firstName + ' ' + star.surname;
    var obj = {
        fullName: fName
    };
    return obj;
});
console.log(arr2);