const Router = require('koa-router')
const GamesController = require('./controller/GamesController')

module.exports = () => {
  const router = new Router();

  router.get('/', async (context) => {
    await context.render('index', {
      message: 'Hello, World!'
    })
  })

  const gamesController = GamesController()
  router.get('/games', gamesController.index)

  return router
}
