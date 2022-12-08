 const cryptoModel = require("../model/cryptoModel")
let axios = require("axios")


let getStatus = async function(req,res){
    try{
      let options ={
        method:"get",
        url:"https://api.coincap.io/v2/assets",
        headers:{
            Authorization: "Bearer ad5fd46a-ba9c-4078-9b10-e0bae89ae7f4",
          }
      }
      let result = await axios(options);
      let data1 = result.data.data
           data1 =  data1.sort((a,b)=>{return a.changePercent24hr-b.changePercent24hr})
           let arr=[]
           await cryptoModel.deleteMany({})
           for(let a=0;a<data1.length;a++){
            let x=data1[a].name
            let y=data1[a].symbol
            var Unique=await cryptoModel.find({name:x,symbol:y})
            if(Unique.length==0){
              let obj ={}
              obj.symbol=data1[a].symbol
              obj.name=data1[a].name
              obj.marketCapUsd=data1[a].marketCapUsd
              obj.priceUsd=data1[a].priceUsd
              arr.push(obj)
              req.body = obj
             let data2 = await cryptoModel.create(obj)
             
            }
          }
          res.status(201).send({ status: true, data:data1})
  }
  catch(err){
        console.log(err)
        return res.status(500).send({status:false,message:err.message})
    }
}


module.exports = {getStatus}