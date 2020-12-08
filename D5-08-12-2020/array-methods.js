
var req = new XMLHttpRequest()
req.open('GET','https://restcountries.eu/rest/v2/all',true)
req.send()

req.onload = () =>{
    var data = JSON.parse(req.response)
    if(req.status===200){
       console.log("Countries in Asia region")
       var asiaRegion = data.filter((x)=>{return x.region==='Asia'})
       var op = []
       for(var i in asiaRegion){
           op.push(asiaRegion[i].name)
        }
        console.log(op)

        console.log("Countries with population less than 2 lacs")
        var l2lpop = data.filter((x)=>{return x.population<200000})
        op = []
        for(var i in l2lpop){
            op.push(l2lpop[i].name)
        }
        console.log(op)

        console.log('Name-Capital-Flag')
        data.forEach((x)=>{
            console.log("Name: "+x.name)
            console.log("Capital: "+x.capital)
            console.log("Flag: "+x.flag)
        })

        console.log("Total population of all countries")
        var pop = []
        data.forEach((x)=>{pop.push(x.population)})
        console.log(pop.reduce((p,c)=>{return p+c}))

        console.log("Countries using US Dollars as currency")
        op = []
        var uscur = data.filter((x)=>{
            return x.currencies.some((y)=>{
                return y.code==="USD"
            })
        })
        for(var i in uscur){
              op.push(uscur[i].name)
        }
        console.log(op)
    }
    else{
        console.log("Error: "+req.status+" "+req.statusText)
    }
}