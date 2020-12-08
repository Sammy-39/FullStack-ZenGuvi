console.log("Remove Duplicates")
var arr = [1,2,3,2,5,6,5]

console.log("Anonymous Function");
var removeDupli = function(arr){
    return arr.filter((x,p)=>{return arr.indexOf(x)===p})
}

console.log(removeDupli(arr))

console.log("IIFE");
(function(arr){
    console.log(arr.filter((x,p)=>{return arr.indexOf(x)===p}))
})(arr)
