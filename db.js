const dynamoose = require("dynamoose");

const ddb =
  process.env.STAGE === "development"
    ? new dynamoose.aws.ddb.DynamoDB({
        credentials: {
          accessKeyId: "MockAccessKeyId",
          secretAccessKey: "MockSecretAccessKey",
        },
        region: "localhost",
        endpoint: "http://0.0.0.0:8000",
      })
    : new dynamoose.aws.ddb.DynamoDB({
        "region": "us-west-1"
      });

module.exports = dynamoose.aws.ddb.set(ddb);
// const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
// const client = new DynamoDBClient({});

// const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
// const dynamoose = require("dynamoose");

// const ddb = new dynamoose.aws.ddb.DynamoDB({
//   "credentials": {
//       "accessKeyId": "MockAccessKeyId",
//       "secretAccessKey": "MockSecretAccessKey"
//   },
//   "region": "localhost",
//   "endpoint": 'http://0.0.0.0:8000'
// });

// const client = new DynamoDBClient({
//   region: 'localhost',
//   endpoint: 'http://0.0.0.0:8000',
//   credentials: {
//     accessKeyId: 'MockAccessKeyId',
//     secretAccessKey: 'MockSecretAccessKey'
//   },
// })

// module.exports = client;
