console.log("Rotate-K-times")
var arr = [1,3,5,7,9]

console.log("Anonymous Function");
var rotate = function(arr,k){
    var n = arr.length
    var op = []
    k%=n
    arr.forEach((x,i)=>{
        if(i<k){
            op.push(arr[n+i-k])
        }
        else{
            op.push(arr[i-k])
        }
    })
    return op
}

console.log(rotate(arr,2))

console.log("IIFE");
(function(arr,k){
    var n = arr.length
    var op = []
    k%=n
    arr.forEach((x,i)=>{
        if(i<k){
            op.push(arr[n+i-k])
        }
        else{
            op.push(arr[i-k])
        }
    })
    console.log(op)
})(arr,2)