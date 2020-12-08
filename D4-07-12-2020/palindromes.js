console.log("Palindrome")
var arr = ['civic','radar','geek','guvi','121','12321']

console.log("Anonymous Function");
var palin = function(arr){
    var isPalin = (x) =>{
        var i=0,j=x.length-1
        while(i<j){
            if(x[i++]!==x[j--]){
                return false
            }
        }
        return true
    }

    return arr.filter((x)=>{return isPalin(x)})
}

console.log(palin(arr))

console.log("IIFE");
(function(arr){
    var isPalin = (x) =>{
        if(x===x.split("").reverse().join("")){ 
            return true
        }
        return false
    }

    console.log(arr.filter((x)=>{return isPalin(x)}))
})(arr)