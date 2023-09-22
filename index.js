const express = require('express')
const mongoose = require('mongoose')
const app = express()
const authRoutes = require('./routes/authRoutes')


app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'ejs')

const dbUrl = 'mongodb+srv://emanuelzembrunski:@cluster0.f7jgxgg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{useUnifiedTopology: true})
.then(
    (result) => app.listen(4001)
)
.catch((error) => console.log(error))
//routes
app.get('/', (request, response) => {
    response.send('Hello world')

})

app.use(authRoutes)

// app.listen(4000, () => {
//     console.log('El servidor se esta ejecutando');
// })