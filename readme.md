# EventHub Console Stream

Mercilessly dump an EventHub stream into your console.

## Setup + Installation

Clone from Gibhub.

    $ git clone https://github.com/owenscott/eventhub-console-stream

Navigate the the repo's root folder. Create a JSON file in the root directory named `conf.json` in the format:

    {
      "connectionString": "your_connection_string",
      "hubName": "your_hub_name",
      "consumerGroup": "your_consumer_group"
    }

Install dependencies:

    $ npm install

## How to Run

    $ node app.js

The app will automatically read from all partitions and print the results into your console.
