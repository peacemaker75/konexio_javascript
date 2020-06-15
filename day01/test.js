// function simpleAdding(num) {
//     // console.log(num);
//     var result = 0;
//     var i = 1;
//     while (i <= num) {
//         // console.log(i);
//         result = result + i;
//         i++;
//     }
//     // console.log(result);
//     return result;
// }

// console.log(simpleAdding(4));
function simpleAdding(num) {
    var result = num;
        for (i = num-1; i > 0; i--) {
            result = result * i; 
        }
        return result; 
    }
    console.log(simpleAdding(8));