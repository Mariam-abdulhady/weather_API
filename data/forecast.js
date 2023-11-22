const request=require('request')
 const forecast=(letitude, longitude,callback)=>{


     const url= "http://api.weatherapi.com/v1/current.json?key=9170cd55fc484b82bd6121642232111&q="+letitude+","+longitude
    request({url,json:true},(error,response)=>{
    if(error){
      callback("unable to connect weather service",undefined)
    }else if(response.body.error){
        callback(response.body.error.message,undefined)
    
    }else{
        callback(undefined,response.body.location.name+' IT IS '+response.body.current.condition.text+" And Temp "+ response.body.current.temp_c)
        
    }
    })
    }
    module.exports=forecast;