"use strict";
import log from "npmlog";

/* istanbul ignore if */
if (process.env.VERBOSE) {
  log.level = "verbose";
}

import RedisAdapter from "./RedisAdapter";

export default RedisAdapter;
export { RedisAdapter };
