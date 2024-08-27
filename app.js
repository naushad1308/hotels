const express = require('express')
const app = express()

const db = require('./db')
require('dotenv').config()


var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const personRoutes = require('./routes/personRoutes.js')
const menuItemsRoutes = require("./routes/menuItemsRoutes.js")



app.use('/person', personRoutes)
app.use("/menu", menuItemsRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running on port 3000')
})


