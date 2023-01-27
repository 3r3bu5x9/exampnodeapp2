const express = require('express')
const cors=require('cors')
const studentRouter=require('./routes/student')

const app = express();
app.use(cors('*'))
app.use(express.json())
//add the router
app.use('/student', studentRouter)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started successfully on port 4000')
})