require('dotenv').config()
const kafka = require('kafka-node')
const axios = require('axios')
const querystring = require('querystring')
const client = new kafka.KafkaClient()
const Consumer = kafka.Consumer
const consumer = new Consumer(client, [
  { topic: 'topic1', partition: 0 },
], {
  autoCommit: true,
})
consumer.on('message', async (message) => {
  await axios.post('https://notify-api.line.me/api/notify', querystring.stringify({ message: message.value }), {
    headers: {
      'Authorization': 'Bearer ' + process.env.LINE_NOTIFY_TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
})

consumer.on('error', (err) => {
  console.log('error', err)
})
