import express from "express"
const app=express()

app.get('/',(req,res)=>{
    res.send('service 1')
})




app.listen(5000,()=>console.log('server is running'))
