console.log("Array-Sum")
var arr = [10,20,30,50]

console.log("Anonymous Function");
var arrSum = function(arr){
    console.log(arr.reduce((p,c)=>{return p+c}))
}

arrSum(arr);

console.log("IIFE");
(function(arr){
    console.log(arr.reduce((p,c)=>{return p+c}))
})(arr)

