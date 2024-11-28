const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const app = express();

// para poder ejecutar desde el servidor local.
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type'],
  }
  
  // Enable CORS middleware with the configuration
  app.use(cors(corsOptions))

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api', require('./rutas')) // para acceder a la api como tal es necesario ingresar /api/ como 

// static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;