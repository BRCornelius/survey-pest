var aws = require('aws-sdk');
var ddb = new aws.DynamoDB({region: 'us-east-2'});
var parseData = require('./parse-data.js');
const updateArray = require('./update-array.js');


exports.handler = (event, context, callback) => {
  
    const surveyName = 'samples';
    
    const submittedEmail = event.toString();
    const getParams = {
      TableName: surveyName
    };
    ddb.scan(getParams, function (err, data) {
        if (err) { context.fail(err) }
        if (data) {
          const activeEmails = parseData(data.Items).find(e => e.name === 'first');
          const remainingEmails = updateArray(activeEmails.emails, submittedEmail);
          const putParams = {
            Key: {
              name: { S: 'first' },
            },
            UpdateExpression: `SET emails = :emails`,
            TableName: surveyName,
            ExpressionAttributeValues: {
              ":emails": { "SS": remainingEmails }
            }
          };
          ddb.updateItem(putParams, (err, putData) => {
              callback(null, {err: err, data: JSON.stringify(remainingEmails)});
              if (err) {
                  context.fail(err);
              } else {
                  context.succeed(remainingEmails);
              }
          });
        }
    });
};