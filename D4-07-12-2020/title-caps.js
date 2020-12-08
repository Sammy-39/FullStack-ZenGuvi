console.log("Title-Caps")
var arr = ['guvi','zen','geek']

console.log("Anonymous Function");
var toTitleCaps = function(arr){
    return arr.map((x)=>{
        return x[0].toUpperCase() + x.slice(1).toLowerCase() })
}

console.log(toTitleCaps(arr));

console.log("IIFE");
(function(arr){
    var op = arr.map((x)=>{
        return x[0].toUpperCase() + x.slice(1).toLowerCase() })
    console.log(op)
})(arr)