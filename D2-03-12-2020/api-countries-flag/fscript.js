
var req = new XMLHttpRequest();
req.open("GET",'https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = () =>{
    var data = JSON.parse(req.response);
    if(req.status===200){
        for(var i in data){
            document.write("<p>"+data[i]['name']+":      "+ data[i]['flag']+"</p>")
        }
    }
    else{
        document.write(`error ${req.status} ${req.statusText}`)
    }
}
