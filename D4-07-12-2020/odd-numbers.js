console.log("Odd-Numbers")
var arr = [2,3,4,5,6,7,8,9]

console.log("Anonymous Function");
var odd = function(arr){
    return arr.filter((x)=>{return x%2!==0})
}

console.log(odd(arr));

console.log("IIFE");
(function(arr){
    console.log(arr.filter((x)=>{return x%2!==0}))
})(arr)

