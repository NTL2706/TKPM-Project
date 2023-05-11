async function getDashBoard(req, res){
    console.log("oke");
    res.render("dashboard/dashboard");
}


module.exports = {
    getDashBoard,
}