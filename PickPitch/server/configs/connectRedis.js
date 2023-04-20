const redis = require("redis");
const env = require("../configs/envConfigs");
const Ticket = require("../models/Ticket");
const TimeBooking = require("../models/TimeBooking");
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
  Ticket.findOne({
    _id: message,
  }).then(async (ticket) => {
    if (ticket.not_paid) {
      ticket.pitchs.forEach(async (pitch) => {
        pitch.time.split(",").forEach(async (TIME) => {
          TimeBooking.find({
            pitch_id: pitch.pitch_id,
            time: new Date(TIME),
          }).then(async (booking) => {
            await TimeBooking.deleteOne({ _id: booking._id });
          });
        });
      });
      Ticket.updateOne({_id:ticket._id},{
        is_delete:true,
      })
    }
  });
});

module.exports = { pub, sub };
