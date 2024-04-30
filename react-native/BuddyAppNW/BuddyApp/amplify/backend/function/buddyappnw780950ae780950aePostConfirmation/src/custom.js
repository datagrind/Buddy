/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import fetch from 'node-fetch';
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const { fromEnv } = require("@aws-sdk/credential-providers");

const sesClient = new SESClient({ region: "us-west-1", credentials: fromEnv() }); // Replace "your-region" with your AWS region


exports.handler = async (event, context) => {

    const firstname = event?.request?.userAttributes?.given_name 
    const lastname = event?.request?.userAttributes?.family_name 
    const GRAPHQL_ENDPOINT = process.env

    const handleCheckName = () => {
        if (firstname === undefined || lastname === undefined){
            return ``
        } else {
            return ` ${event?.request?.userAttributes?.given_name } ${event?.request?.userAttributes?.family_name }`
        }
    }

    const checkName = handleCheckName()

  try {
      if (
          event?.request?.userAttributes?.email &&
          event.triggerSource === "PostConfirmation_ConfirmSignUp"
      ) {
        const emailParams = {
          Destination: {
              ToAddresses: [event?.request?.userAttributes?.email]
          },
          Message: {
              Body: {
                  Text: {
                      Data: ""
                  },
                  Html: {
                    Data: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New User Signup Confirmation</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                                color: #333;
                            }
                            .container {
                                max-width: 600px;
                                margin: 20px auto;
                                padding: 20px;
                                background-color: #fff;
                                border-radius: 10px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                            h1 {
                                color: #007bff;
                            }
                            p {
                                margin-bottom: 20px;
                            }
                            .btn {
                                display: inline-block;
                                padding: 10px 20px;
                                background-color: #007bff;
                                color: #fff;
                                text-decoration: none;
                                border-radius: 5px;
                            }
                            .btn:hover {
                                background-color: #0056b3;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Buddy App Confirmation</h1>
                            <p>Thank you${checkName}! You have been confirmed.</p>
                            <p>Please sign in to your new account and set up your profile.</p>
                            <p>Enjoy!</p>
                            <p></p>
                            <p>Sincerely,<br>The Buddy App Team</p>
                        </div>
                    </body>
                    </html>
                    `, // required
                    Charset: "UTF-8",
                  },
              },
              Subject: {
                  Data: "Buddy App Confirmation"
              }
          },
          Source: "no-reply@usebuddyapp.io"
      };
          await sesClient.send(new SendEmailCommand(emailParams));
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

