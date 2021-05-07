/*
var valores = [8, 1, 7, 4, 2, 9]
for (var pos = 0; pos < valores.length; pos++) {
    
    console.log(`The position ${pos+1} has the value ${valores.sort()[pos]}`)
    
}
*/

var valores = [8, 1, 7, 4, 2, 9]
for(var pos in valores) {
    console.log(`The position ${pos} has the value ${valores[pos]}`)
}