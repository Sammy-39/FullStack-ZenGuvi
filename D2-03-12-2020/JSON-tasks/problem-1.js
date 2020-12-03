console.log("Problem-1")
var obj = {name: 'RajiniKanth', age: 33, hasPets : false}

function printAllValues(obj){
    var output = []
    for(var i in obj){
        output.push(obj[i])
    }

    console.log(output)
}

printAllValues(obj)