console.log("Problem-0B")
var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }

console.log("Setting atFaultForAccident to false")
for(var i in myCar['accidents']){
    myCar['accidents'][i]['atFaultForAccident'] = false    
}
console.log(myCar)
console.log(" ")

console.log("Date of accidents")
for(var i in myCar['accidents']){
    console.log(myCar['accidents'][i]['date'])    
}

