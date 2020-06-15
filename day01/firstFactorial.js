function simpleAdding(num) {
    var result = num;
        for (i = num-1; i > 0; i--) {
            result = result * i; 
        }
        return result; 
    }
    console.log(simpleAdding(8));