
const pitchModel = require("../model/pitchModel");
async function Paginated(req, res, next) {
  const page = parseInt(req.params["page"]);
  const limit = 6;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

 
  if (endIndex < (await pitchModel.find({})).length) {
    results.next = page + 1;
  }

  if (startIndex > 0) {
    results.previous = page - 1;

  }

  try {
    results.results = await pitchModel.find({}).limit(limit).skip(startIndex).exec();
    results.currentPage = page;
    req.paginatedResults = results.results;
    console.log(results.next);
    req.results = results;
    next();
  } catch (error) {
    
  }
}

module.exports = Paginated;
