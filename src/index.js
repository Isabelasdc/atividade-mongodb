const express = require ('express')
const DBConnection = require('./db/connection')
const routes = require('./routes/routes')

const app = express()
const PORT = 3000


app.use(express.json())

app.use (routes)

DBConnection()


// stuff

app.listen(PORT , () => {
    console.log(`Aplicação está rodando na porta ${PORT}`)
})