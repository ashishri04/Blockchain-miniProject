const express = require("express")
const route = require("./router/route")
const mongoose =require("mongoose")

const app = express()
app.use(express.json())

//mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://ashi:jhansi284205@myfirstcluster.tfihevu.mongodb.net/crypto",{useNewUrlParser:true})

.then(()=>console.log("Mongoose is connected"))
.catch(err => console.log(err))


app.use('/',route)


app.listen(process.env.PORT || 3000,function(){
    console.log("express app running on PORT" + (process.env.PORT || 3000))
})