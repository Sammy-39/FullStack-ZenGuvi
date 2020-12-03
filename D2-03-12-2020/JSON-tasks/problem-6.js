console.log("Problem-6")
var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
[['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    
    for(var i in arr){
        var obj = {}
        for(var j in arr[i]){
            obj[arr[i][j][0]] = arr[i][j][1]
        }
        tranformEmployeeList.push(obj)
    }
    
    return tranformEmployeeList;
}

console.log(transformEmployeeData(arr))