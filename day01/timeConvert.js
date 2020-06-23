function timeConvert(num) {
    var nbHour = Math.floor(num/3600);
    var rest = num - (nbHour*3600);
    var nbMinute = Math.floor(rest/60);
    rest = rest- (nbMinute*60);
    
    return nbHour + ':' + nbMinute + ':' + rest;

}
console.log(timeConvert(11003));