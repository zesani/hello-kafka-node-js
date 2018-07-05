const responseMiddle = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = 500
    ctx.body = error
  }
}

module.exports = responseMiddle
