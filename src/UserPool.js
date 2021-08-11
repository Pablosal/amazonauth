import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_dyFQCe285",
  ClientId: "3cnhgsvem4iluira8ialmcrr68",
};

export default new CognitoUserPool(poolData);
