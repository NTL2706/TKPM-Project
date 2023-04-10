const redis = require("redis");

let connect_redis = {
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
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
