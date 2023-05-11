﻿const { pub, sub } = require("../../configs/connectRedis");
const TimeBooking = require("../../models/TimeBooking");
const Ticket = require("../../models/Ticket");
const booking = {
  postBooking: async (req, res) => {
    //Example
    /*
    INPUT:
    information_ticket = {
      [
      {
        pitch_id:...,
        time: ,
      }
      {
        pitch_id:...,
        time,
      }
      ],

      total:...
    }
    
    because input maybe have a lot of duplicate pitch_id
    {
      pitch_id:1
      time 6am
    }
    {
      pitch_id:1
      time: 7am
    }
    ===>
    PITCHS =[
      {
        pitch_id:1
        time:[6am, 7am]
      }
      {
        pitch_id:2
        time:[6am, 7am]
      }
    ]
    */

    const informationTicket = req.body.information_ticket;
    const totalPrice = req.body.total;
    const user_id = req.body.user_id;
    try {
      const pitchs = [];

      for (let i of informationTicket) {
        let check = pitchs.find((element) => {
          if (element.pitch_id == i.pitch_id) {
            element.time += "," + i.time;
            return true;
          }
          return false;
        });

        if (check == undefined) {
          pitchs.push(i);
        }
      }
      // for (let i = 0; i < informationTicket.length; i++) {
      //   const temp ={};
      //   const {pitch_id,time,price} = informationTicket[i];
      //   temp.pitch_id = pitch_id;
      //   temp.time = time;
      //   temp.price = price;

      //   let check = pitchs.find(element =>{
      //     if (element.pitch_id){

      //     }
      //   })
      // }
      console.log(pitchs);
      const createTicket = new Ticket({
        pitchs: pitchs,
        user_id: user_id,
        price: totalPrice,
        is_delete: false,
        not_paid: true,
        total: totalPrice,
      });

      createTicket.save().then(async (data) => {
        for (let i = 0; i < data.pitchs.length; i++) {
          let timeofpitchs = data.pitchs[i].time.split(",");
          for (let j = 0; j < timeofpitchs.length; j++) {
            const booking_time = new TimeBooking({
              time: new Date(timeofpitchs[j]).toISOString(),
              pitch_id: data.pitchs[i].pitch_id,
            });
            await booking_time.save();
          }
        }
        await pub.configSet("notify-keyspace-events", "Ex");
        await pub.setEx(String(data._id), 5, "hello");
      });
      res.status(200).json({
        state: "successfully",
      });
    } catch (err) {}
  },

  getUserTicket: async (req, res) => {
    const user_id = req.body.user_id;
    const user_ticket = await Ticket.find({
      user_id: user_id,
    });

    if (!user_ticket) {
      return res.json({
        message: "user didn't order any ticket",
      });
    }

    return res.json({
      order_ticket: user_ticket,
    });
  },

  deleteUserTicket: async (req, res) => {
    const id_ticket = req.body.ticket_id;
    const ticket = await Ticket.findOne({ _id: id_ticket });
    const date_now = Date.now();
    const date_order = ticket.create_at;
    try{
      if (date_order.getDay() - date_now.getDay() >= 2) {
        ticket.pitchs.forEach(async (pitch) => {
          pitch.time.split(",").forEach(async (TIME) => {
            TimeBooking.find({
              pitch_id: pitch.pitch_id,
              time: new Date(TIME),
            }).then();
          });
        });
        return res.json({
          message: "Delete successfully"
        })
      }
      else{
        return res.json({
          message: "Delete failed"
        })
      }
    }catch(err){

    }
    
  },
};

module.exports = booking;
