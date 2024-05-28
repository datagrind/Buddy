export type AmplifyDependentResourcesAttributes = {
  "analytics": {
    "buddyapp": {
      "Id": "string",
      "Region": "string",
      "appName": "string"
    }
  },
  "api": {
    "buddyappv2": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "buddyappv2auth": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "CreatedSNSRole": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "adminGroupRole": "string",
      "providerGroupRole": "string",
      "userGroupRole": "string"
    }
  },
  "function": {
    "buddyappv2authPostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3buddyappv2media": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}