export {
  ClientError,
  gql,
  GraphQLClient,
} from "https://esm.sh/v128/graphql-request@6.1.0";
export {
  connect,
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
} from "https://esm.sh/@dagger.io/dagger@0.8.4";

import * as tar from "https://cdn.jsdelivr.net/gh/tsirysndr/tar@v0.1.1/mod.ts";

const compress = tar.default.compress;

export { compress };

export { nanoid } from "https://esm.sh/nanoid@4.0.2";
export { green } from "https://deno.land/std@0.129.0/fmt/colors.ts";
export { TerminalSpinner } from "https://deno.land/x/spinners@v1.1.2/mod.ts";
export { SpinnerTypes } from "https://deno.land/x/spinners@v1.1.2/spinner-types.ts";

export type {
  CallbackFct,
  ConnectOpts,
} from "https://esm.sh/@dagger.io/dagger@0.8.4";
