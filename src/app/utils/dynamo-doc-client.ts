// Create a service client module using ES6 syntax.
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { default as ddbClient, marshallOptions, unmarshallOptions } from "./dynamo-client";

export type TddbDocParams = {
  TableName: string, // "Table name"
  ProjectionExpression?: string, // "#r, #y, title"
  ExpressionAttributeNames?:  object, // { "#r": "rank", "#y": "year" }
  FilterExpression?: string, // "title = :t and #y = :y and info.#r = :r"
  ExpressionAttributeValues?: object, // { ":r": "MOVIE_RANK", ":y": "MOVIE_YEAR", ":t": "MOVIE_NAME", },
}

// Create the DynamoDB document client.
export const ddbDocClient =
  DynamoDBDocumentClient.from(ddbClient, {
    marshallOptions,
    unmarshallOptions,
  });

export default ddbDocClient;

