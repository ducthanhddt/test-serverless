const dynamoose = require('dynamoose');

const dogSchema = new dynamoose.Schema({
  breed: {
    hashKey: true,
    type: String,
    required: true,
  },
  name: {
    rangeKey: true,
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  throughput: 5,
  useNativeBooleans: true,
  useDocumentTypes: true,
});

// don't attempt to create a table in DynamoDb
const configObj = {
  create: false,
  update: false,
  waitForActive: false
};

const DogModel = dynamoose.model(`${process.env.STAGE}-dogs-table`,
  dogSchema,
  configObj
);
module.exports = DogModel;