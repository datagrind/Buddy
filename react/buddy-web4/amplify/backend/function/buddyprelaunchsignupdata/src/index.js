const { SESClient, SendEmailCommand  } = require("@aws-sdk/client-ses");
const { fromEnv } = require("@aws-sdk/credential-providers")


const client = new SESClient({ credentials: fromEnv() });

exports.handler = async (event, context) => {

  try {
    for (const streamedItem of event.Records) {
      if (streamedItem.eventName === 'INSERT') {
        // Pull off items from stream
        const candidateFirstName = streamedItem.dynamodb.NewImage.firstname.S;
        const candidateLastName = streamedItem.dynamodb.NewImage.lastname.S;
        const candidateEmail = streamedItem.dynamodb.NewImage.email.S;

        // Validate email address
        if (!isValidEmail(candidateEmail)) {
          throw new Error('Invalid email addresss');
        }

        const adminEmailInput = { // SendEmailRequest
          Source: 'no-reply@usebuddyapp.io', // required
          Destination: { // Destination
            BccAddresses: [
              // 'john_yang81@yahoo.com',
            ],
            CcAddresses: [],
            ToAddresses: [ // AddressList
            'usebuddyapp@gmail.com',
            ],
          },
          Message: { // Message
            Subject: { // Content
              Data: "New Buddy Pre-Launch SignUp", // required
              Charset: "UTF-8",
            },
            Body: { // Body
              Text: {
                Data: `My name is ${candidateFirstName} ${candidateLastName}. You can reach me at ${candidateEmail}`, // required
                Charset: "UTF-8",
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
                        <h1>New User Landing Page Signup Confirmation</h1>
                        <p>Dear Admin,</p>
                        <p>A new user has signed up on the Buddy App landing page:</p>
                        <ul>
                            <li><strong>Name:</strong> ${candidateFirstName} ${candidateLastName} </li>
                            <li><strong>Email:</strong> ${candidateEmail}</li>
                        </ul>
                        <p>Please welcome the new user and provide any necessary assistance.</p>
                        <p>Thank you!</p>
                        <p>Sincerely,<br>The Buddy App Team</p>
                    </div>
                </body>
                </html>
                `, // required
                Charset: "UTF-8",
              },
            },
          },
        };

        const customerEmailInput = {
          Destination: {
              ToAddresses: [candidateEmail],
              BccAddresses: [
                'usebuddyapp@gmail.com'
              ],
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
                            <h1>Buddy Waitlist Confirmation</h1>
                            <p>Thank you ${candidateFirstName } ${candidateLastName } for signing up!</p>
                            <p>Please be alert for any new information on launch dates and opportunities.</p>
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
        
        try {
            // Send email to admin
            const command = new SendEmailCommand(adminEmailInput);
            const response = await client.send(command);
            if (response.$metadata.httpStatusCode === 200) {
                console.log("Admin email has been sent successfully!");
            } else {
                console.error("Failed to send admin email. HTTP status code:", response.$metadata.httpStatusCode);
            }
        } catch (error) {
            console.error("Error sending admin email:", error);
        }
          
        try {
            // Send email to customer
            const command2 = new SendEmailCommand(customerEmailInput);
            const response2 = await client.send(command2);
            if (response2.$metadata.httpStatusCode === 200) {
                console.log("Customer email has been sent successfully!");
            } else {
                console.error("Failed to send customer email. HTTP status code:", response2.$metadata.httpStatusCode);
            }
        } catch (error) {
            console.error("Error sending customer email:", error);
        }
      
      }
    }
    
    return { status: 'done' }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

function isValidEmail(email) {
  // Basic email validation, you might want to use a more robust solution
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}











