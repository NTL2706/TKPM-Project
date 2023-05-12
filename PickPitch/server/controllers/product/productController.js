const Ticket = require("../../models/Ticket");
const TimeBooking = require("../../models/TimeBooking");
const product = {
  showProduct: async (req, res) => {
    const results = {};
    let page = Math.max(parseInt(req.query.page) || 1, 1);
    if (req.query.page == null) {
      page = 1;
    }

    const size = await Ticket.count({});
    const limit = 2;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const tickets = await Ticket.find({}).skip(startIndex).limit(limit);

    if (endIndex < size) {
      results.next = page + 1;
    }

    if (startIndex > 0) {
      results.previous = page - 1;
    }
    results.currentPage = page;
    
    let all_of_ticket = tickets;
    let nextPage = "/product" +"/show-product"+"?page=" + results.next;
    let currentPage ="/product" +"/show-product"+"?page=" + results.currentPage;
    let prevousPage ="/product" +"/show-product"+"?page=" + results.previous;
    
    let temp = [];
    for (let ticket of all_of_ticket){
        const date = new Date(ticket.create_at);
        const object = {};
        let state;
        object.create_at = date.getDate()+ " " + String(parseInt(date.getMonth()) + 1) + " " + date.getFullYear();
        if (ticket.not_paid){
            state = "Not paid"
        }
        else{
            state = "Paid"
        }
        object._id = String(ticket._id);
        object.size = ticket.pitchs.length;
        object.not_paid = state
        object.user_id = String (ticket.user_id)
        temp.push(object);
    }

    res.render("product/orderProduct.hbs",{
        tickets: temp,
        nextLink: nextPage,
        currentLink: currentPage,
        previousLink: prevousPage,
        next: results.next,
        currentPage: results.currentPage,
        previous: results.previous,
    })

  },

  deleteProduct:async (req,res)=>{
    console.log("hello")
    const ticket_id = req.params.id;
    console.log(ticket_id);
    const ticket = await Ticket.findOne({
      _id:ticket_id
    });
    console.log(ticket);
    if (!ticket){
      return res.status(200).json({
        message:"Ticket does not exist"
      })
    }else{
      try{
      Ticket.findOne({
        _id:ticket_id
      }).then(async(ticket)=>{
        if (!ticket.is_delete){
        ticket.pitchs.forEach(async(pitch)=>{
          pitch.time.split(",").forEach(async(TIME)=>{
            TimeBooking.findOne({
              pitch_id: pitch.pitch_id,
              time: new Date(TIME).toISOString(),
            }).then(async (booking) => {
              console.log(booking);
              await TimeBooking.deleteOne({ _id: booking._id });
            });
          })
          
          await Ticket.deleteOne({
            _id:ticket_id
          })
        })
        }
        else{
          await Ticket.deleteOne({
            _id:ticket_id
          })
        }
        res.redirect("/product//show-product?page=1");
      });
      
    }catch(err){
      return res.status(200).json({
        err:err
      }) 
    }
    }
  }
};

module.exports = product;
