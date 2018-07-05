const producer = require('../client/producer')
const testController = {
  async kafka (ctx) {
    const { topic, message } = ctx.request.query
    producer.send(topic, message)
    ctx.body = 'hello kafka !'
  },
}

module.exports = testController
