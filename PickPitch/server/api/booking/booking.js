const { pub, sub } = require("../../configs/connectRedis");
const TimeBooking = require("../../models/TimeBooking");
const Ticket = require("../../models/Ticket");
const booking = {
  getBooking: async (req, res) => {
    
    
  },

  postBooking: async (req,res)=>{
    const {pitchID} = req.body;
    
    try {
     
        const createTicket = new Ticket({
            pitch_id: pitchID,
            price:  price,
        })

        await createTicket.save();
        for (let i = 0; i < pitchID.length;i++){
            TimeBooking
        }

        console.log(await pub.pubSubChannels())
        await pub.configSet("notify-keyspace-events", "Ex");
        await pub.setEx(String(count), 5, "hello");
        
    } catch (err) {}
  } 
  
};
