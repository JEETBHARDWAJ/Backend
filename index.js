const express =  require('express')

const app = express()

const port = 4000

app.get('/',(req,res) =>{
    res.send('Hello i am geting request Susfully')
})
app.get('/login',(req,res) =>{
    res.send('login')
})

app.get('/tweeter',(req,res) =>{
    res.send("tweeter")
})



app.listen(port,() =>{
    console.log('Example app listening on ${port} ')
})