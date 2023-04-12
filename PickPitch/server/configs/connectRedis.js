const redis = require("redis");
const env = require("../configs/envConfigs");
let connect_redis = {
  password: env.REDIS_PASSWORD,
  socket: {
    host: env.REDIS_HOSTNAME,
    port: env.REDIS_PORT,
  },
};

let pub, sub;

pub = redis.createClient(connect_redis);
sub = redis.createClient(connect_redis);

pub.connect();
sub.connect();

pub.on("connect", () => {
  console.log("pub connect to redis");
});

sub.on("connect", () => {
  console.log("sub connect to redis");
});

sub.subscribe("__keyevent@0__:expired", async (message, channel) => {
    console.log(message)
});

module.exports = {pub,sub};
