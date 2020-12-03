
var req = new XMLHttpRequest();
req.open("GET",'https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = () =>{
    var data = JSON.parse(req.response);
    if(req.status===200){
        for(var i in data){
            document.write("<h3>"+data[i]['name']+"</h3>")
            for(var j in data[i]){
                document.write("<p>"+j+": "+data[i][j]+'</p>')
            }
            document.write("<br> <hr> <br>")
        }
    }
    else{
        document.write(`error ${req.status} ${req.statusText}`)
    }
}



