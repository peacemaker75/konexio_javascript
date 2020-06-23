var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function(star){
    return star.firstName + ' ' + star.surname;
});
console.log(arr2);