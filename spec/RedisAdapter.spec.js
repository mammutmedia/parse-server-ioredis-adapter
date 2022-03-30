var ParseIoRedisAdapterPackage = require('../src/index');
var ParseRedisAdapter = ParseIoRedisAdapterPackage.RedisAdapter;

describe("RedisAdapter", () => {
  let redisConfig;

  beforeEach(function () {
    // Make mock config
    redisConfig = {
      port: 6379,
      host: 'localhost',
      password: ''
    };

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  
  it("properly export the module", () => {
    expect(typeof ParseIoRedisAdapterPackage.default).toBe("function");
    expect(typeof ParseIoRedisAdapterPackage.RedisAdapter).toBe("function");
  });

  it('can be initialized', (done) => {
    var parseRedisAdapter = new ParseRedisAdapter(redisConfig)

    expect(typeof parseRedisAdapter).toBe("object")
    done();
  });

  it('should return redis publisher', (done) => {
    var parseRedisAdapter = new ParseRedisAdapter(redisConfig)
    expect(typeof parseRedisAdapter.createPublisher()).toBe("object")
    done();
  });

  it('should return redis subscriber', (done) => {
    var parseRedisAdapter = new ParseRedisAdapter(redisConfig)
    expect(typeof parseRedisAdapter.createSubscriber()).toBe("object")
    done();
  });

  it('should have connection', () => {
    var parseRedisAdapter = new ParseRedisAdapter(redisConfig)

    return parseRedisAdapter.client.ping()
  })
});
