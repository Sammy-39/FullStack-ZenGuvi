console.log("Problem-0A")
var cat = {
    name: 'Fluffy',
    activities: ['play','eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy','eat bread omlet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep','pre-sleep naps'],
            weight: 3
        }
    ]
}

console.log("JSON Value")
console.log(cat);
console.log(" ")

cat.height = 6
cat.weight = 8
console.log("value after adding height and weight")
console.log(cat)
console.log(" ")

cat.name = 'Fluffyy'
console.log("Name after correction: "+cat.name)
console.log(cat)
console.log(" ")

console.log("catFriends Activities")
for(var i in cat['catFriends']){
    console.log(cat['catFriends'][i]['name']+"'s activities: "+cat['catFriends'][i]['activities'])
}
console.log(" ")

console.log("catFriends name")
for(var i in cat['catFriends']){
    console.log(cat['catFriends'][i]['name'])
}
console.log(" ")

var tweight = 0
for(var i in cat['catFriends']){
    tweight+=cat['catFriends'][i]['weight']
}
console.log("Total weight of catFriends: "+tweight)
console.log(" ")

var tact = cat['activities'].length
for(var i in cat['catFriends']){
    tact+=cat['catFriends'][i]['activities'].length
}
console.log("Total activities of all cats: "+tact)
console.log(" ")

console.log("catFriends Activities updated")
cat['catFriends'][0]['activities'].push('play with ball')
cat['catFriends'][0]['activities'].push('jumping around')
cat['catFriends'][1]['activities'].push('eat fruits')
cat['catFriends'][1]['activities'].push('hide')
for(var i in cat['catFriends']){
    console.log(cat['catFriends'][i]['name']+"'s activities: "+cat['catFriends'][i]['activities'])
}
console.log(" ")

for(var i in cat['catFriends']){
    if(cat['catFriends'][i]['name']==='bar'){
        cat['catFriends'][i]['furcolor'] = "black"
    }
}
console.log("Updated fur color of bar: "+ cat['catFriends'][0]['furcolor'])
console.log(cat['catFriends'][0])