const Router = require('koa-router')

module.exports = () => {
  const router = new Router();

  router.get('/', async (context) => {
    await context.render('index', {
      message: 'Hello, World!'
    })
  })

  return router
}
