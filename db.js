const dynamoose = require("dynamoose");

console.log('sdfdsfsdfsdf', process.env.NODE_ENV)
const ddb =
  process.env.NODE_ENV === "development"
    ? new dynamoose.aws.ddb.DynamoDB({
        credentials: {
          accessKeyId: "MockAccessKeyId",
          secretAccessKey: "MockSecretAccessKey",
        },
        region: "localhost",
        endpoint: "http://0.0.0.0:8000",
      })
    : new dynamoose.aws.ddb.DynamoDB({
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
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
