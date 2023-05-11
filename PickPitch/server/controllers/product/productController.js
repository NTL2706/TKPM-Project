const Ticket = require("../../models/Ticket");
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
    console.log("page", results)
    let all_of_ticket = tickets;
    let nextPage = "/product" +"/show-product"+"?page=" + results.next;
    let currentPage ="/product" +"/show-product"+"?page=" + results.currentPage;
    let prevousPage ="/product" +"/show-product"+"?page=" + results.previous;
    console.log(tickets);
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
};

module.exports = product;
