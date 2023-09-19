const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes/ToDoRoute")

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

/* Connect to mongoDB*/
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log(`Connect to mongoDB...`))
    .catch((err)=> console.log(err))

app.use(express.json())
app.use(cors())

app.use(routes)
app.listen(PORT, ()=> console.log(`Listening on : ${PORT}`))