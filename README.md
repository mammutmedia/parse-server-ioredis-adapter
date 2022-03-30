# Parse ioredis Adapter

[![Build Status](https://github.com/mammutmedia/parse-server-ioredis-adapter/workflows/ci/badge.svg?branch=master)](https://github.com/mammutmedia/parse-server-ioredis-adapter/actions?query=workflow%3Aci+branch%3Amaster)
[![Snyk Badge](https://snyk.io/test/github/mammutmedia/parse-server-ioredis-adapter/badge.svg)](https://snyk.io/test/github/mammutmedia/parse-server-ioredis-adapter)
[![Coverage](https://img.shields.io/codecov/c/github/mammutmedia/parse-server-ioredis-adapter/master.svg)](https://codecov.io/gh/mammutmedia/parse-server-ioredis-adapter?branch=master)
[![auto-release](https://img.shields.io/badge/%F0%9F%9A%80-auto--release-9e34eb.svg)](https://github.com/mammutmedia/parse-server-ioredis-adapter/releases)

[![npm latest version](https://img.shields.io/npm/v/parse-server-ioredis-adapter)](https://www.npmjs.com/package/parse-server-ioredis-adapter)

---

A Redis adapter for Parse Server. 

---

- [Logging](#logging)
- [Using the adapter on Parse Server](#Using-the-adapter-on-Parse-Server)
  - [Install ioredis Adapter](#Install-ioredis-Adapter)
  - [Configure Parse Server](#configure-parse-server)


# Logging

You can enable verbose logging with environment variable:

```
VERBOSE=1
```

This will produce a more verbose output.

# Using the adapter on Parse Server

## Install ioredis Adapter

```
npm install --save parse-server-ioredis-adapter@VERSION
```

Replace VERSION with the version you want to install.

## Configure Parse Server

```js
const RedisAdapter = require('parse-server-ioredis-adapter').default;
const redisConfig = {
  port: 6379,
  host: 'localhost',
  password: 'top-secret'
}

const options = {
  appId: "****",
  masterKey: "****",
  liveQuery: {
    classNames: ['****'],
    pubSubAdapter: new RedisAdapter(redisConfig)
  }
  /* ... */ 
}

const server = new ParseServer(options);

/* continue with the initialization of parse-server */
```