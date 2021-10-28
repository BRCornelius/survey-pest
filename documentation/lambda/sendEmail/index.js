var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-east-1'});
const ddb = new aws.DynamoDB({region: 'us-east-2'});
const generateHTML = require('generateHtml.js');
const getEmailList = require('getEmailList.js');

const MY_EMAIL = 'brcornelius@gmail.com';

exports.handler = (event, context, callback) => {
    const { subject } = event;
    getEmailList(ddb, 'samples', context.fail, data => {
        const to = data.Items[0].emails.SS || ['brcornelius@gmail.com'];
        const params = {
            Destination: {
                ToAddresses: [...to]
            },
            Message: {
                Body: {
                    Html: { Data: generateHTML(event) }
                },
                Subject: { Data: subject}
            },
            Source: MY_EMAIL
        };
        ses.sendEmail(params, function (err, data) {
            callback(null, {err: err, data: data});
            if (err) {
                context.fail(err, event);
            } else {
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(event)
                };
                context.succeed(response);
            }
        });
    });
};
