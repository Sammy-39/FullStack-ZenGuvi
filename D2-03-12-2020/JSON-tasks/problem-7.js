console.log("Problem-7")
var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 6}

function assertObjectsEqual(actual, expected, testName){
   if(JSON.stringify(expected)===JSON.stringify(actual)){
       console.log("Passed")
   }
   else{
       console.log("Failed")
   }
}

assertObjectsEqual(actual,expected,'detects that two objects are equal')