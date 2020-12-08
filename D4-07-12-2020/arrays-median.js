console.log("Arrays-Median")
var arr1 = [1,12,15,26,38]
var arr2 = [2,13,17,30,45]

var median = (arr,n) =>{
    if(n%2!==0){
        return arr[Math.floor(n/2)]
    }
    else{
        return Math.floor((arr[(n/2)-1] + arr[(n/2)])/2)
    }
    
}

console.log("Anonymous Function");
var medianOfArrays = function(arr1,arr2,s){
    
    if(s<1){
        return -1
    }
    if(s===1){
        return (arr1[0]+arr2[0])/2
    }
    if(s===2){
        return (Math.max(arr1[0],arr2[0])+Math.min(arr1[1],arr2[1]))/2
    }

    var m1 = median(arr1,s)
    var m2 = median(arr2,s)

    if(m1===m2){
        return m1
    }
    if(m1>m2){
        if(s%2===0){ return medianOfArrays(arr1,arr2.slice((s/2)),s/2) }
        else { return medianOfArrays(arr1,arr2.slice(Math.floor(s/2)),Math.ceil(s/2)) }
    }
    else{
        if(s%2===0){ return medianOfArrays(arr1.slice((s/2)),arr2,s/2) }
        else { return medianOfArrays(arr1.slice(Math.floor(s/2)),arr2,Math.ceil(s/2)) }
    }
}

console.log(medianOfArrays(arr1,arr2,arr1.length))

console.log("IIFE");
console.log((function(arr1,arr2,s){

    if(s<1){
        return -1
    }
    if(s===1){
        return (arr1[0]+arr2[0])/2
    }
    if(s===2){
        return (Math.max(arr1[0],arr2[0])+Math.min(arr1[1],arr2[1]))/2
    }

    var m1 = median(arr1,s)
    var m2 = median(arr2,s)

    if(m1===m2){
        return m1
    }
    if(m1>m2){
        if(s%2===0){ return medianOfArrays(arr1,arr2.slice((s/2)),s/2) }
        else { return medianOfArrays(arr1,arr2.slice(Math.floor(s/2)),Math.ceil(s/2)) }
    }
    else{
        if(s%2===0){ return medianOfArrays(arr1.slice((s/2)),arr2,s/2) }
        else { return medianOfArrays(arr1.slice(Math.floor(s/2)),arr2,Math.ceil(s/2)) }
    }
    
})(arr1,arr2,arr1.length));