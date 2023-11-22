
const forecast=require('./data/forecast')
const geoCode=require('./data/geoCode')


const country=process.argv[2]
geoCode(country,(error,data)=>{
    console.log("ERROR :",error);
   console.log("DATA :",data);

 if(data){
forecast(data.longitude,data.letitude,(error,data)=>{
    console.log("ERROR :",error);
    console.log("DATA :",data);
})}
else{
    console.log("Data Enter IS ERROR");
}
})