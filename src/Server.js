const path = require('path')
const Koa = require('koa')
const Router = require('./Router')
const BodyParser = require('koa-bodyparser')
const ErrorHandler = require('./middleware/ErrorHandler')
const Renderer = require('koa-ejs')

module.exports = () => {
  const app = new Koa()
  const router = Router()

  Renderer(app, {
    root: path.join(__dirname, 'view'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: true
  })

  app.use(ErrorHandler())
  app.use(BodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return {
    start: () => app.listen(3000)
  }
}
