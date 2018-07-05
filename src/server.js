const Koa = require('koa')
const cors = require('kcors')
const koaBody = require('koa-body')
const router = require('./controllers')
const middleware = require('./middleware/response')

const app = new Koa()

app.use(cors()) // set cors
app.use(koaBody({ formLimit: '5mb', multipart: true })) // set koa-body limit file 5mb
app.use(middleware) // set middleware
app.use(router.routes()) // separate route

const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 3000
app.listen(port)
console.log('Environment: ', env)
console.log('Server is listening @ port ' + port)

exports.default = app
