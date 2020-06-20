function timeConvert(num) {
    var rest = num;
    var result = '';
    var nbJour = Math.floor(rest/(3600*24));
    rest -= nbJour*24*3600;
    var nbHour = Math.floor(rest/3600);
    rest -= nbHour*60;
    var nbMinute = Math.floor(rest/60);
    rest -= nbMinute*60;
    var nbSecond = rest;
    if (nbJour >0)
        result = result+nbJour+':';
    if (nbHour >0)
        result = result+nbHour+':';
    if (nbMinute >0)
        result = result+nbMinute+':';
    if (nbSecond >0)
        result = result+nbSecond+'';
    
    return result;

}
console.log(timeConvert(3700));