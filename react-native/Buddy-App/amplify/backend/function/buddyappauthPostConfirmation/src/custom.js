const { SESClient, SendEmailCommand  } = require("@aws-sdk/client-ses");
const { fromEnv } = require("@aws-sdk/credential-providers")

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event, context) => {
    try {
        if (
            event?.request?.userAttributes?.email &&
            event.triggerSource === "PostConfirmation_ConfirmSignUp"
        ) {
            // Your email sending logic here
            return {
                statusCode: 200,
                body: "Email sent successfully"
            };
        } else {
            return {
                statusCode: 400,
                body: "Invalid request: Missing user attributes or incorrect trigger source"
            };
        }
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: "Internal server error"
        };
    }
};


async function sendEmail(to, body) {
    var eParams = {
        Destination: {
            ToAddresses: [to]
        },
        Message: {
            Body: {
                Text: {
                    Data: body
                }
            },
            Subject: {
                Data: "Cognito identity Provider Registration Complete",
            }
        },
        Source: "usebuddyapp@gmail.com"
    }
    return await SESClient.sendEmail(eParams).promise()
}