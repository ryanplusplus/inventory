module.exports = () =>
  async (context, next) => {
    try {
      await next()
    }
    catch (error) {
      context.status = 500
      context.body = error
    }
  }
