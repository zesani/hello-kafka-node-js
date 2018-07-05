const testController = require('./test.controller')

exports.default = {
  controller: testController,
  routes: [
    { method: 'get', url: '/kafka', handler: 'kafka' },
  ],
}
