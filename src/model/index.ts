import dynamoose from "dynamoose";

const db = () => {
  dynamoose.aws.sdk.config.update({
    region: "us-east-1",
  });
  dynamoose.aws.ddb.local();
};

export default db;
