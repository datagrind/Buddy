/**
 * 
 * 
 * @fileoverview
 *
 * This CloudFormation Trigger creates a handler which awaits the other handlers
 * specified in the `MODULES` env var, located at `./${MODULE}`.
 */

const AWS = require("aws-sdk")
AWS.config.region = process.env.AWS_REGION

const ses = new AWS.SES({ apiVersion: "2010-12-01"})

/**
 * The names of modules to load are stored as a comma-delimited string in the
 * `MODULES` env var.
 */
const moduleNames = process.env.MODULES.split(',');
/**
 * The array of imported modules.
 */
const modules = moduleNames.map((name) => require(`./${name}`));

/**
 * This async handler iterates over the given modules and awaits them.
 *
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-async
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 *
 */
exports.handler = async (event, context) => {

  if (
    event.request.userAttributes.email &&
    event.triggerSource === "PostConfirmation_ConfirmSignUp"
  ){
    return await sendEmail(
      event.request.userAttributes.email,
      "Congratulations " + event.userName + ", you have been confirmed: "
    )
  }


  /**
   * Instead of naively iterating over all handlers, run them concurrently with
   * `await Promise.all(...)`. This would otherwise just be determined by the
   * order of names in the `MODULES` var.
   */
  await Promise.all(modules.map((module) => module.handler(event, context)));
  return event;
};


async function sendEmail(to, body) {
  var eParams = {
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Body: {
        Text: {
          Data: body,
        },
      },
      Subject: {
        Data: "Buddy Pre-Launch SignUp completed"
      },
    },
    Source: "xiongbenjamin@gmail.com"
  }
  return await ses.sendEmail(eParams).promise()
}