const Game = require('../model/Game')

module.exports = () => {
  return {
    index: async (context) => {
      await context.render('games/index', {
        games: await Game.query()
      })
    }
  }
}
