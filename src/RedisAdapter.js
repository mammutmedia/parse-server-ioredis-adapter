"use strict";
import Redis from "ioredis";

export default class ParseIoRedisAdapter {
  constructor(redisConfig) {
    this.client = new Redis(redisConfig)
  }

  createPublisher() {
    return this.client
  }

  createSubscriber() {
    return this.client
  }
}
