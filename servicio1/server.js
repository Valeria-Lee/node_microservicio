const express = require('express')

const app = express()

var puerto = 3000

var rutas = require('./api/rutas')

rutas(app)

app.listen(puerto, () => {
    console.log('Server iniciado en el puuerto: ' + puerto)
})

