export type AmplifyDependentResourcesAttributes = {
  "api": {
    "BuddyAppNW": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "buddyappnw780950ae780950ae": {
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
      "AdminGroupRole": "string",
      "ProvidersGroupRole": "string",
      "UsersGroupRole": "string"
    }
  },
  "function": {
    "buddyappNWsignupTodynamoDB": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "buddyappnw780950ae780950aePostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3buddyappnwstorageee71d628media": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}