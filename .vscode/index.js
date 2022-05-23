function updateMap()
{
    
fetch("/data.json")
.then(Response => Response.json)
.then(rsp =>{
    console.log(rsp.data)
    rsp.data.forEach(element => {
        latitude =element.latitude;
        longitude =element.longitude;

        //mark on map
        
    });

})
}

updateMap;