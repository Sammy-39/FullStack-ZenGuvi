
var req = new XMLHttpRequest()
req.open('GET','https://restcountries.eu/rest/v2/all',true)
req.send()

req.onload = () =>{
    var data = JSON.parse(req.response)
    if(req.status===200){
       console.log("1.Countries in Asia region")
       var asiaRegion = data.filter((x)=>{return x.region==='Asia'})
       var op = []
       asiaRegion.forEach((x)=>{op.push(x.name)})
       console.log(op)

        console.log("2.Countries with population less than 2 lacs")
        var l2lpop = data.filter((x)=>{return x.population<200000})
        op = []
        l2lpop.forEach((x)=>{op.push(x.name)})
        console.log(op)

        console.log('3.Name-Capital-Flag')
        data.forEach((x)=>{
            console.log(`Name: ${x.name} Capital: ${x.capital} Flag: ${x.flag}`)
        })

        console.log("4.Total population of all countries")
        console.log(data.reduce((a,c)=>{return a+c.population},0))

        console.log("5.Countries using US Dollars as currency")
        op = []
        var uscur = data.filter((x)=>{
            return x.currencies.some((y)=>{
                return y.code==="USD"
            })
        })
        uscur.forEach((x)=>{op.push(x.name)})
        console.log(op)
    }
    else{
        console.log("Error: "+req.status+" "+req.statusText)
    }
}