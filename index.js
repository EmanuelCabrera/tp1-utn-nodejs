const express = require('express')
const mongoose = require('mongoose')
const app = express()
const taskRoutes = require('./routes/taskRoutes')


app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'ejs')

const dbUrl = ''
mongoose.connect(dbUrl,{useUnifiedTopology: true})
.then(
    (result) => app.listen(4001)
)
.catch((error) => console.log(error))
//routes
app.get('/', (request, response) => {
    response.send('Hello world')

})

app.use(taskRoutes)

// app.listen(4000, () => {
//     console.log('El servidor se esta ejecutando');
// })