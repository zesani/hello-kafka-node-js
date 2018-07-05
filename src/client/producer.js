const kafka = require('kafka-node')
const Producer = kafka.Producer
const client = new kafka.Client()
const producer = new Producer(client)
producer.on('ready', () => {})

producer.on('error', (err) => {
  console.log('error', err)
})

const kafkaProducer = {
  send (topic, message) {
    console.log(topic, message)
    producer.send([{ topic, messages: message }], (err, data) => {
      console.log(err, data)
    })
    return true
  },
}

module.exports = kafkaProducer
