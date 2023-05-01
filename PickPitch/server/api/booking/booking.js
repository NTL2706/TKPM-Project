const { pub, sub } = require("../../configs/connectRedis");
const TimeBooking = require("../../models/TimeBooking");
const Ticket = require("../../models/Ticket");

const booking = {
  postBooking: async (req, res) => {
    const informationTicket = req.body.informationTicket;

    try {
      const pitchs = [];
      const temp = {};
      for (let i = 0; i < informationTicket.length; i++) {
        const { pitch_id, time, price } = informationTicket[i];
        temp.pitch_id = pitch_id;
        temp.time = time;
        temp.price = price;
        if (!pitchs.includes(pitch_id)) {
          pitchs.push(temp);
        } else {
          pitchs.push(temp);
        }
      }
      const createTicket = new Ticket({
        pitch_id: pitchID,
        price: price,
      });

      await createTicket.save();
      for (let i = 0; i < pitchID.length; i++) {
        TimeBooking;
      }

      await pub.configSet("notify-keyspace-events", "Ex");
      await pub.setEx(String(count), 5, "hello");
    } catch (err) {}
  },
};

module.exports = booking;
