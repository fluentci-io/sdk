import Client from "./src/client.ts";

export default Client;
export * from "./src/client.ts";
export {
  DaggerSDKError,
  UnknownDaggerError,
  DockerImageRefValidationError,
  EngineSessionConnectParamsParseError,
  ExecError,
  GraphQLRequestError,
  InitEngineSessionBinaryError,
  TooManyNestedObjectsError,
  EngineSessionError,
  EngineSessionConnectionTimeoutError,
  NotAwaitedRequestError,
  ERROR_CODES,
} from "@dagger.io/dagger";
export { gql } from "graphql-tag";
export { GraphQLClient } from "graphql-request";
export type { ConnectOpts } from "@dagger.io/dagger";
export { connect } from "./src/connect.ts";
export type { CallbackFct } from "./src/connect.ts";
