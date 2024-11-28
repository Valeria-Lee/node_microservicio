const app = require('./api/controlador')

app.listen(app.get('port'))
console.log('Server on port ', app.get('port'))