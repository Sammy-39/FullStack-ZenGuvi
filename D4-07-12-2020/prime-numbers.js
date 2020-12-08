console.log("Prime-Numbers")
var arr = [2,3,5,7,10,23,6,9]

console.log("Anonymous Function");
var prime = function(arr){
    var isPrime = (x)=>{
        if(x<2){ 
            return false
        }
        else{
              for(var i=2;i<x;i++){
                  if(x%i===0){ return false }
              }
              return true
        }
    }

    return arr.filter((x)=>{return isPrime(x)})
}

console.log(prime(arr));

console.log("IIFE");
(function(arr){
    var isPrime = (x)=>{
        if(x<2){ 
            return false
        }
        else{
              for(var i=2;i<x;i++){
                  if(x%i===0){ return false }
              }
              return true
        }
    }

    console.log(arr.filter((x)=>{return isPrime(x)}))
})(arr)