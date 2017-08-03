const clientCreator = require('azure-event-hubs').Client;
const conf = require('./conf.json');

const client = clientCreator.fromConnectionString(conf.connectionString);

client.open()
  .then(() => client.getPartitionIds())
  .then(ids => Promise.all(ids.map(id => 
    client.createReceiver(conf.consumerGroup, id, { startAfterTime: Date.now() })
      .then(receiver => {
        receiver.on('message', msg => {
          const body = msg.body;
          console.log(JSON.stringify(body));
        })
        return receiver;
      })
  )))
  .catch(err => {
    console.log(err);
  });
