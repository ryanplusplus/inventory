const path = require('path')
const Koa = require('koa')
const Router = require('./Router')
const BodyParser = require('koa-bodyparser')
const ErrorHandler = require('./middleware/ErrorHandler')
const Renderer = require('koa-ejs')
const Knex = require('knex')
const knexConfig = require('../knexfile')
const { Model } = require('objection')

module.exports = () => {
  const app = new Koa()

  const knex = Knex(knexConfig.development)
  Model.knex(knex)

  Renderer(app, {
    root: path.join(__dirname, 'view'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: true
  })

  const router = Router()

  app.use(ErrorHandler())
  app.use(BodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return {
    start: () => app.listen(3000)
  }
}
